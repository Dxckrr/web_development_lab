import UserServicePort from "../../domain/port/driver/service/UserServicePort";
import UserPort from "../../domain/port/driver/usecase/UserUseCasePort";
import { UserInterface } from "../../domain/user/AbstractUser";
import { RegisterUserInterface } from "../../domain/user/auth/AbstractRegisterUser";
import User from "../../domain/user/User";

export default class UserUseCase implements UserPort {
    constructor(private readonly userService: UserServicePort) { }
    async createUser(user: RegisterUserInterface): Promise<User | null> {
        return await this.userService.createUser(user)
    }
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers()
    }
    async getUserById(id: string): Promise<User> {
        return await this.userService.getUserById(id)
    }
    async updateUser(id: string, item: Partial<UserInterface>): Promise<User | boolean> {

        return await this.userService.updateUser(id, item)
    }
    async deleteUser(id: string): Promise<boolean> {
        return await this.userService.deleteUser(id)

    }
}