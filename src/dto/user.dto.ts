import {UserDTO, UserDTO__Output} from "../../pb/auth/UserDTO";

export class UserDto {
    public id: string;
    public email: string;
    public name: string;
    public role: string;
    public phoneNumber: string;

    constructor(user: any) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.role = user.role;
        this.phoneNumber = user.phoneNumber;
    }

    static getGrpcModel(model: UserDto): UserDTO {
        return {
            id: model.id,
            email: model.email,
            name: model.name,
            role: model.role,
            phone_number: model.phoneNumber,
        };
    }

    static parseFromGrpcResponse(response: any): UserDto {
        return new UserDto({
            id: response.id,
            email: response.email,
            name: response.name,
            role: response.role,
            phoneNumber: response.phone_number,
        });
    }
}
