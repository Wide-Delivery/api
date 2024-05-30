import {Truck} from "../driver/truck";

export class DriverDto {
    public driverId: string;
    public mayBeLoader: boolean;
    public searchRadius: number;
    public isVerified: boolean;
    public truck: Truck;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: any) {
        this.driverId = data.driverId;
        this.mayBeLoader = data.mayBeLoader;
        this.searchRadius = data.searchRadius;
        this.isVerified = data.isVerified;
        this.truck = data.truck;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static getModel(model: any): DriverDto | null {
        return model ? new DriverDto({
            driverId: model.driverId,
            mayBeLoader: model.mayBeLoader,
            searchRadius: model.searchRadius,
            isVerified: model.isVerified,
            truck: Truck.getModel(model.truck),
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
        }) : null;
    }
}
