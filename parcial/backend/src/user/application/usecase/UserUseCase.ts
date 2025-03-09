import UserServicePort from "../../domain/port/driver/service/UserServicePort";
import UserPort from "../../domain/port/driver/usecase/UserUseCasePort";
import User from "../../domain/user/User";

export default class UserUseCase implements UserPort {
    constructor(private readonly userService: UserServicePort ) { }
    async getAll(): Promise<User[]> {
        return await this.userService.getAll()
    }
    async getById(id: string): Promise<User> {
        return await this.userService.getById(id)
    }
}