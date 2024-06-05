import {Order} from "../../pb/com/widedelivery/order/proto/Order";

export class OrderDto {
    public id: string;
    public userId: string;
    public cargoType: string;
    public cargoLength: number;
    public cargoWidth: number;
    public cargoHeight: number;
    public departureLongitude: string;
    public departureLatitude: string;
    public departureTime: Date | null;
    public destinationLongitude: string;
    public destinationLatitude: string;
    public destinationTime: Date | null;
    public description: string;
    public needLoader: boolean;
    public createdAt: Date | null;
    public updatedAt: Date | null;

    constructor(data: any) {
        this.id = data.id;
        this.userId = data.userId;
        this.cargoType = data.cargoType;
        this.cargoLength = data.cargoLength;
        this.cargoWidth = data.cargoWidth;
        this.cargoHeight = data.cargoHeight;
        this.departureLongitude = data.departureLongitude;
        this.departureLatitude = data.departureLatitude;
        this.departureTime = data.departureTime ? new Date(data.departureTime) : null;
        this.destinationLongitude = data.destinationLongitude;
        this.destinationLatitude = data.destinationLatitude;
        this.destinationTime = data.destinationTime ? new Date(data.destinationTime) : null;
        this.description = data.description;
        this.needLoader = data.needLoader;
        this.createdAt = data.createdAt ? new Date(data.createdAt) : null;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : null;
    }

    static parseFromGrpcResponse(response: any) {
        return new OrderDto({
            id: response.id,
            userId: response.user_id,
            cargoType: response.cargo_type,
            cargoLength: response.cargo_length,
            cargoWidth: response.cargo_width,
            cargoHeight: response.cargo_height,
            departureLongitude: response.departure_longitude,
            departureLatitude: response.departure_latitude,
            departureTime: response.departure_time?.seconds ? new Date(response.departure_time.seconds * 1000).toISOString() : null,
            destinationLongitude: response.departure_longitude,
            destinationLatitude: response.departure_latitude,
            destinationTime: response.destination_time?.seconds ? new Date(response.destination_time.seconds * 1000).toISOString() : null,
            description: response.description,
            needLoader: response.need_loader,
            createdAt: response.created_at?.seconds ? new Date(response.created_at.seconds * 1000).toISOString() : null,
            updatedAt: response.updated_at?.seconds ? new Date(response.updated_at.seconds * 1000).toISOString() : null,
        });
    }

    static getGrpcModel(model: any): Order {
        return {
            id: model.id,
            user_id: model.userId,
            cargo_length: model.cargoLength,
            cargo_width: model.cargoWidth,
            cargo_height: model.cargoHeight,
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
            description: model.description,
            need_loader: model.needLoader,
            created_at: {
                seconds: model.createdAt.getTime() / 1000,
            },
            updated_at: {
                seconds: model.updatedAt.getTime() / 1000,
            },
        };
    }

    static parseFromHttpBody(body: any){
        return {
            id: body.id,
            userId: body.userId,
            cargoLength: body.cargoLength,
            cargoWidth: body.cargoWidth,
            cargoHeight: body.cargoHeight,
            departureLongitude: body.departureLongitude,
            departureLatitude: body.departureLatitude,
            departureTime: new Date(body.departureTime),
            destinationLongitude: body.destinationLongitude,
            destinationLatitude: body.destinationLatitude,
            destinationTime: new Date(body.destinationTime),
            description: body.description,
            needLoader: body.needLoader,
            createdAt: new Date(body.createdAt),
            updatedAt: new Date(body.updatedAt),
        };
    }
}

