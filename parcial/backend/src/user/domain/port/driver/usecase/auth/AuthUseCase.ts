import RegisterUser from "../../../../user/auth/RegisterUser";
import User from "../../../../user/User";

export default interface AuthUseCasePort {
    login(email: string, password: string): Promise<User>;
    logout(user: User): Promise<void>;
    register(user: RegisterUser): Promise<User>;
}
