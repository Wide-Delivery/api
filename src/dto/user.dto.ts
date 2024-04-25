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
}
