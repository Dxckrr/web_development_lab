import UserAuthPort from "../../../domain/port/driver/usecase/auth/AuthUseCase"
import RegisterUser from "../../../domain/user/auth/RegisterUser"
import User from "../../../domain/user/User"
import LoginService from "../../service/auth/AuthService"

export default class AuthUseCase implements UserAuthPort {
    constructor(private readonly loginService: LoginService) { }
    async login(email: string, password: string): Promise<User> {
        return await this.loginService.login(email, password)
    }
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.")
    }
    register(_user: RegisterUser): Promise<User> {
        throw new Error("Method not implemented.")
    }
}