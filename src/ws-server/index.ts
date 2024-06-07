import * as WebSocket from 'ws';
import {IncomingMessage} from "node:http";
import {AuthService} from "../auth/auth.service";
import {UserDto} from "../dto/user.dto";
import {OrderService} from "../order/order.service";
import {OrderDto} from "../dto/order.dto";

interface WebSocketConnectionWithUser {
    ws: WebSocket,
    user: UserDto
}

const connections = new Map<string, WebSocketConnectionWithUser>();
const orders: OrderDto[] = [];

export const startWebSocketServer = () => {
    const wss = new WebSocket.Server({ port: 3020 });

    wss.on('connection', async function connection(ws: WebSocket, request: IncomingMessage) {
        const params = new URLSearchParams(request.url?.substring(request.url.indexOf('?')) ?? '');
        const token = params.get('token');

        if (!token) {
            ws.close(1008, 'Token is required');
            return;
        }

        try {
            const user = await AuthService.getMe(token);

            const receivedOrders = await OrderService.getOrdersWithFilters();
            receivedOrders.forEach(order => orders.push(order));

            connections.set(user.id, {ws, user});

            ws.on('message', function incoming(message: string) {
                console.log(`Received message from ${user.id}: ${message}`);
            });

            for (let i = 0; i < 30; i++) {
                ws.send(JSON.stringify(orders[i]));
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
            ws.send('Connection established');
        } catch (err: any) {
            ws.close(1008, err);
        }
    });
}
