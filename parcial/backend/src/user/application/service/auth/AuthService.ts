import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import UserRepositoryPort from "../../../domain/port/driven/UserRepositoryPort";
import AuthServicePort from "../../../domain/port/driver/service/AuthService";
import RegisterUser from "../../../domain/user/auth/RegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";

export default class AuthService implements AuthServicePort {
    constructor(private readonly authRepository: AuthRepositoryPort,
        private readonly userRepository: UserRepositoryPort
    ) {

    }
    public login = async (email: string, _password: string): Promise<User> => {
        const user = await this.userRepository.findByEmail(email)
        if(user === undefined || user === null) {
            return Promise.resolve(new NullUser());
        }
        this.authRepository
        return Promise.resolve(user);
    };
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    register(_user: RegisterUser): Promise<User> {
        throw new Error("Method not implemented.");
    }
}


