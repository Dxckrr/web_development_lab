import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import UserRepositoryPort from "../../../domain/port/driven/UserRepositoryPort";
import AuthServicePort from "../../../domain/port/driver/service/AuthService";
import RegisterUser from "../../../domain/user/auth/RegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";
import GetterUser from "../../../infrastructure/helpers/GetterUser";

export default class AuthService implements AuthServicePort {
    constructor(private readonly authRepository: AuthRepositoryPort,
        private readonly userRepository: UserRepositoryPort
    ) {

    }
    public login = async (email: string, password: string): Promise<User> => {
        const userData = await this.userRepository.findByEmail(email)
        if(userData === undefined || userData === null) {
            return Promise.resolve(new NullUser());
        }
        const user : User = GetterUser.get(userData) 
        const isPasswordCorrect : boolean = await this.authRepository.comparePasswords(password,user.getPassword())
        console.log(isPasswordCorrect)
        if(!isPasswordCorrect) {
            return Promise.resolve(new NullUser());
        }
        return Promise.resolve(user);
    };
    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    register(_user: RegisterUser): Promise<User> {
        throw new Error("Method not implemented.");
    }
}


