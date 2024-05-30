import {Truck} from "./truck";
import * as ProtoDriver from "../../pb/driver/Driver";

export class PreCreatedDriver {
    public userId: string;
    public mayBeLoader: boolean;
    public searchRadius: number;
    public truck: Truck;
    public isVerified: boolean;

    constructor(data: any) {
        this.userId = data.userId;
        this.mayBeLoader = data.mayBeLoader;
        this.searchRadius = data.searchRadius;
        this.truck = data.truck;
        this.isVerified = false;
    }
}

export class Driver {
    public driverId: string;
    public userId: string;
    public mayBeLoader: boolean;
    public searchRadius: number;
    public isVerified: boolean;
    public truck: Truck;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: any) {
        this.driverId = data.driverId;
        this.userId = data.userId;
        this.mayBeLoader = data.mayBeLoader;
        this.searchRadius = data.searchRadius;
        this.isVerified = data.isVerified;
        this.truck = data.truck;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static getModel(model: any): Driver | null {
        return model ? new Driver({
            driverId: model.id,
            userId: model.user.id,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            mayBeLoader: model.mayBeLoader,
            searchRadius: model.searchRadius,
            isVerified: model.isVerified,
            truck: Truck.getModel(model.truck),
        }) : null;
    }

    static getGrpcModel(model: Driver): ProtoDriver.Driver {
        return {
            driver_id: model.driverId,
            user_id: model.userId,
            may_be_loader: model.mayBeLoader,
            search_radius: model.searchRadius,
            truck: Truck.getGrpcModel(model.truck)
        }
    }

    static parseFromGrpcResponse(response: any) {
        return response ? new Driver({
            driverId: response.driver_id,
            userId: response.user_id,
            mayBeLoader: response.may_be_loader,
            searchRadius: response.search_radius,
            isVerified: response.is_verified,
            truck: Truck.parseFromGrpcResponse(response.truck),
        }) : null;
    }

    static parseFromHttpBody(body: any) {
        return {
            driver_id: body.driverId,
            user_id: body.userId,
            may_be_loader: body.mayBeLoader,
            search_radius: body.searchRadius,
            is_verified: body.isVerified,
            truck: body.truck ? Truck.parseFromHttpBody(body.truck) : null,
        };
    }
}
