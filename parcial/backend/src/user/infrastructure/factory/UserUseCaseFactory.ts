import MySQLUser from "../../../sql/infrastructure/database/MySQLUser";
import LoginService from "../../application/service/auth/AuthService"
import AuthUseCase from "../../application/usecase/auth/AuthUseCase";
import UserUseCase from "../../application/usecase/UserUseCase";
import UserAuthPort from "../../domain/port/driver/usecase/auth/AuthUseCase";
import UserPort from "../../domain/port/driver/usecase/UserUseCasePort";
import AuthRepository from "../repository/auth/AuthRepository"
import UserRepository from "../repository/UserRepository";

export default class UserUseCaseFactory {
    public static createAuthUseCase(): UserAuthPort {
        const authRepository = new AuthRepository();
        const mySQLUser = new MySQLUser()
        const userRepository = new UserRepository(mySQLUser);
        const loginService = new LoginService(authRepository,userRepository);
        return new AuthUseCase(loginService);
    }
    public static createUserUseCase(): UserPort {
        return new UserUseCase()

    }

}
