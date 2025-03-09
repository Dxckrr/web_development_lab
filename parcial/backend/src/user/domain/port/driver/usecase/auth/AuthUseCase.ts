import { RegisterUserInterface } from "../../../../user/auth/AbstractRegisterUser";
import User from "../../../../user/User";

export default interface AuthUseCasePort {
    login(email: string, password: string): Promise<{ user: User, token: string }>;
    logout(user: User): Promise<void>;
    register(user: RegisterUserInterface): Promise<User>;
}
