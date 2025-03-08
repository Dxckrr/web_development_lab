import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import AuthServicePort from "../../../domain/port/driver/service/AuthService";
import RegisterUser from "../../../domain/user/auth/RegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";

export default class AuthService implements AuthServicePort {
    constructor(private readonly authRepository: AuthRepositoryPort) {

    }
    public login = async (_email: string, _password: string): Promise<User> => {
        console.log(this.authRepository)
        return Promise.resolve(new NullUser());
    };
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    register(_user: RegisterUser): Promise<User> {
        throw new Error("Method not implemented.");
    }
}


