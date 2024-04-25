export class OrderDto {
    public id: string;
    public userId: string;
    public cargoType: string;
    public cargoLength: number;
    public cargoWidth: number;
    public cargoHeight: number;
    public departureLongitude: string;
    public departureLatitude: string;
    public departureTime: Date;
    public destinationLongitude: string;
    public destinationLatitude: string;
    public destinationTime: Date;
    public description: string;
    public needLoader: boolean;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: any) {
        this.id = data.id;
        this.userId = data.userId;
        this.cargoType = data.cargoType;
        this.cargoLength = data.cargoLength;
        this.cargoWidth = data.cargoWidth;
        this.cargoHeight = data.cargoHeight;
        this.departureLongitude = data.departureLongitude;
        this.departureLatitude = data.departureLatitude;
        this.departureTime = new Date(data.departureTime);
        this.destinationLongitude = data.destinationLongitude;
        this.destinationLatitude = data.destinationLatitude;
        this.destinationTime = new Date(data.destinationTime);
        this.description = data.description;
        this.needLoader = data.needLoader;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = new Date(data.updatedAt);
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
            departureTime: response.departure_time.seconds * 1000,
            destinationLongitude: response.departure_longitude,
            destinationLatitude: response.departure_latitude,
            destinationTime: response.departure_time.seconds * 1000,
            description: response.description,
            needLoader: response.need_loader,
            createdAt: response.createdAt.seconds * 1000,
            updatedAt: response.updatedAt.seconds * 1000,
        });
    }
}
