import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import UserRepositoryPort from "../../../domain/port/driven/UserRepositoryPort";
import AuthServicePort from "../../../domain/port/driver/service/AuthServicePort";
import { RegisterUserInterface } from "../../../domain/user/auth/AbstractRegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";
import GetterUser from "../GetterUser";

export default class AuthService implements AuthServicePort {
    constructor(private readonly authRepository: AuthRepositoryPort,
        private readonly userRepository: UserRepositoryPort) { }

    public login = async (email: string, password: string): Promise<User> => {
        const userData = await this.userRepository.findByEmail(email)
        if (userData === undefined || userData === null) {
            return Promise.resolve(new NullUser());
        }
        const user: User = GetterUser.get(userData)
        const isPasswordCorrect: boolean = await this.authRepository.comparePasswords(password, user.getPassword())
        if (!isPasswordCorrect) {
            return Promise.resolve(new NullUser());
        }
        return Promise.resolve(user);
    };
    public register = async (user: RegisterUserInterface): Promise<User> => {
        if (user === undefined || user === null) {
            return new NullUser();
        }
        // hash
        const hashedPassword: string = await this.authRepository.hashPassword(user.password);

        const newUser = ({
            ...user,
            password: hashedPassword
        });

        const savedUser = await this.userRepository.create(newUser);
        if (savedUser === undefined || savedUser === null) {
            return new NullUser();
        }
        return GetterUser.get(savedUser);
    };

    logout(_user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
}


