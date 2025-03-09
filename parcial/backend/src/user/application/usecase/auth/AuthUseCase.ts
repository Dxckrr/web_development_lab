import JWTInterface from "../../../../jwt/domain/JWTInterface"
import AuthServicePort from "../../../domain/port/driver/service/AuthServicePort"
import UserAuthPort from "../../../domain/port/driver/usecase/auth/AuthUseCase"
import { RegisterUserInterface } from "../../../domain/user/auth/AbstractRegisterUser"
import NullUser from "../../../domain/user/NullUser"
import User from "../../../domain/user/User"

export default class AuthUseCase implements UserAuthPort {
    constructor(private readonly authService: AuthServicePort,
        private readonly jwtService: JWTInterface) { }
    async login(email: string, password: string): Promise<{ user: User; token: string }> {

        if ((email === undefined || email === null) || (password === undefined || password === null)) {
            return { user: new NullUser(), token: "" };
        }

        const user: User = await this.authService.login(email, password);

        if (user.isNull()) {
            return { user: new NullUser(), token: "" };
        }

        const token = this.jwtService.generateToken({ id: user.getId() });

        return { user, token };
    }
    async register(user: RegisterUserInterface): Promise<User> {
        if ((user === undefined || user === null)) return new NullUser();
        return await this.authService.register(user)
    }
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.")
    }
}