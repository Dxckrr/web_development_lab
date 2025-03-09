import UserServicePort from "../../domain/port/driver/service/UserServicePort";
import UserPort from "../../domain/port/driver/usecase/UserUseCasePort";
import { UserInterface } from "../../domain/user/AbstractUser";
import User from "../../domain/user/User";

export default class UserUseCase implements UserPort {
    constructor(private readonly userService: UserServicePort) { }
    async getAll(): Promise<User[]> {
        return await this.userService.getAll()
    }
    async getById(id: string): Promise<User> {
        return await this.userService.getById(id)
    }
    async update(id: string, item: Partial<UserInterface>): Promise<User | boolean> {
        return await this.userService.update(id, item)
    }
    async delete(id: string): Promise<boolean> {
        return await this.userService.delete(id)

    }
}