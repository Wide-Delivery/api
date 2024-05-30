import * as ProtoDriverTrip from "../../pb/driver/DriverTrip";
import {OrderDto} from "../dto/order.dto";
import {CreateDriverTripInput} from "../../pb/driver/CreateDriverTripInput";

export class DriverTrip {
    public tripId: string;
    public driverId: string;
    public departureLongitude: string;
    public departureLatitude: string;
    public departureTime: Date;
    public destinationLongitude: string;
    public destinationLatitude: string;
    public destinationTime: Date;
    public freeSpaceLength: number;
    public freeSpaceWidth: number;
    public freeSpaceHeight: number;
    public status: DriverTripStatus;
    public acceptedOrders: OrderDto[];
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: any) {
        this.tripId = data.driverId;
        this.driverId = data.driverId;
        this.departureLongitude = data.departureLongitude;
        this.departureLatitude = data.departureLatitude;
        this.departureTime = data.departureTime;
        this.destinationLongitude = data.destinationLongitude;
        this.destinationLatitude = data.destinationLatitude;
        this.destinationTime = data.destinationTime;
        this.freeSpaceLength = data.freeSpaceLength;
        this.freeSpaceWidth = data.freeSpaceWidth;
        this.freeSpaceHeight = data.freeSpaceHeight;
        this.status = data.status;
        this.acceptedOrders = data.acceptedOrders ? data.acceptedOrders.map((order: any) => new OrderDto(order)) : [];
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    // static getModel(model: any): DriverTrip | null {
    //     return model ? new DriverTrip({
    //         driverId: model.driverId,
    //         departureLongitude: model.departureLongitude,
    //         departureLatitude: model.departureLatitude,
    //         departureTime: model.departureTime,
    //         destinationLongitude: model.destinationLongitude,
    //         destinationLatitude: model.destinationLatitude,
    //         destinationTime: model.destinationTime,
    //         freeSpaceLength: model.freeSpaceLength,
    //         freeSpaceWidth: model.freeSpaceWidth,
    //         freeSpaceHeight: model.freeSpaceHeight,
    //         status: model.status,
    //         acceptedOrders: model.acceptedOrders.map((order: any) => OrderDto.getModel(order)),
    //         createdAt: model.createdAt,
    //         updatedAt: model.updatedAt,
    //     }) : null;
    // }

    getGrpcModelForCreateDriverTrip(): CreateDriverTripInput {
        return {
            driver_id: this.driverId,
            departure_longitude: this.departureLongitude,
            departure_latitude: this.departureLatitude,
            departure_time: {
                seconds: new Date(this.departureTime).getSeconds() / 1000,
            },
            destination_longitude: this.destinationLongitude,
            destination_latitude: this.destinationLatitude,
            destination_time: {
              seconds: new Date(this.destinationTime).getSeconds() / 1000,
            },
            free_space_length: this.freeSpaceLength,
            free_space_width: this.freeSpaceWidth,
            free_space_height: this.freeSpaceHeight,
        }
    }

    static getGrpcModel(model: DriverTrip): ProtoDriverTrip.DriverTrip {
        return {
            driver_id: model.driverId,
            departure_longitude: model.departureLongitude,
            departure_latitude: model.departureLatitude,
            departure_time: {
                seconds: model.departureTime.getTime() / 1000,
            },
            destination_longitude: model.destinationLongitude,
            destination_latitude: model.destinationLatitude,
            destination_time: {
                seconds: model.destinationTime.getTime() / 1000,
            },
            free_space_length: model.freeSpaceLength,
            free_space_width: model.freeSpaceWidth,
            free_space_height: model.freeSpaceHeight,
            status: model.status,
            accepted_orders: model.acceptedOrders.map(order => OrderDto.getGrpcModel(order)),
            created_at: model.createdAt ? {
                seconds: model.createdAt.getTime() / 1000
            } : null,
            updated_at: model.updatedAt ? {
                seconds: model.updatedAt.getTime() / 1000
            } : null,
        }
    }

    static parseFromGrpcResponse(response: any) {
        return new DriverTrip({
            tripId: response.trip_id,
            driverId: response.driver_id,
            departureLongitude: response.departure_longitude,
            departureLatitude: response.departure_latitude,
            departureTime: new Date(response.departure_time.seconds*1000).toISOString(),
            destinationLongitude: response.destination_longitude,
            destinationLatitude: response.destinationLatitude,
            destinationTime: new Date(response.destination_time.seconds*1000).toISOString(),
            freeSpaceLength: response.freeSpaceLength,
            freeSpaceWidth: response.freeSpaceWidth,
            freeSpaceHeight: response.freeSpaceHeight,
            status: response.status,
            acceptedOrders: response.acceptedOrders ? response.acceptedOrders.map((order: any) => OrderDto.parseFromGrpcResponse(order)) : [],
            createdAt: new Date(response.created_at.seconds*1000).toISOString(),
            updatedAt: new Date(response.updated_at.seconds*1000).toISOString(),
        });
    }

    static parseFromHttpBody(body: any) {
        return new DriverTrip(
            {
                tripId: body.tripId,
                driverId: body.driverId,
                departureLongitude: body.departureLongitude,
                departureLatitude: body.departureLatitude,
                departureTime: new Date(body.departureTime),
                destinationLongitude: body.destinationLongitude,
                destinationLatitude: body.destinationLatitude,
                destinationTime: new Date(body.destinationTime),
                freeSpaceLength: body.freeSpaceLength,
                freeSpaceWidth: body.freeSpaceWidth,
                freeSpaceHeight: body.freeSpaceHeight,
                // status: body.status,
                // accepted_orders: body.acceptedOrders.map((order: any) => OrderDto.parseFromHttpBody(order)),
            }
        );
    }
}

export enum DriverTripStatus {
    EXPECTED = 0,
    FINISHED = 1,
    CANCELLED = 2
}
