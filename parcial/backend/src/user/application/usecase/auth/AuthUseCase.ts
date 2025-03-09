import AuthServicePort from "../../../domain/port/driver/service/AuthServicePort"
import UserAuthPort from "../../../domain/port/driver/usecase/auth/AuthUseCase"
import { RegisterUserInterface } from "../../../domain/user/auth/AbstractRegisterUser"
import User from "../../../domain/user/User"

export default class AuthUseCase implements UserAuthPort {
    constructor(private readonly authService: AuthServicePort) { }
    async login(email: string, password: string): Promise<User> {
        return await this.authService.login(email, password)
    }
    async register(user: RegisterUserInterface): Promise<User> {
        return await this.authService.register(user)
    }
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.")
    }
}