import {User} from "../../pb/com/widedelivery/auth/proto/User";

export class UserDto {
    public id: string;
    public email: string;
    public name: string;
    public role: string;
    public photo: string;
    public phoneNumber: string;

    constructor(user: any) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.role = user.role;
        this.photo = user.photo;
        this.phoneNumber = user.phoneNumber;
    }

    static getGrpcModel(model: UserDto): User {
        return {
            id: model.id,
            email: model.email,
            name: model.name,
            role: model.role,
            phone_number: model.phoneNumber,
            photo: model.photo,
        };
    }

    static parseFromGrpcResponse(response: any): UserDto {
        return new UserDto({
            id: response.id,
            email: response.email,
            name: response.name,
            role: response.role,
            phoneNumber: response.phone_number,
            photo: response.photo,
        });
    }

    static parseFromHttpBody(body: any): UserDto {
        return new UserDto({
            id: body.user_id,
            email: body.email,
            name: body.name,
            role: body.role,
            phoneNumber: body.phoneNumber,
            photo: body.photo,
        });
    }
}
