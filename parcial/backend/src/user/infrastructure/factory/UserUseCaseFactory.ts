import PasswordSecurity from "../../../bycrypt/infrastructure/security/PasswordSecurity";
import JWTService from "../../../jwt/application/service/JWTService";
import MySQLUser from "../../../sql/infrastructure/database/MySQLUser";
import AuthService from "../../application/service/auth/AuthService"
import UserService from "../../application/service/UserService";
import AuthUseCase from "../../application/usecase/auth/AuthUseCase";
import UserUseCase from "../../application/usecase/UserUseCase";
import UserAuthPort from "../../domain/port/driver/usecase/auth/AuthUseCase";
import UserUseCasePort from "../../domain/port/driver/usecase/UserUseCasePort";
import AuthRepository from "../repository/auth/AuthRepository"
import UserRepository from "../repository/UserRepository";

export default class UserUseCaseFactory {
    public static createAuthUseCase(mySQLUser: MySQLUser): UserAuthPort {
        //bycrypt
        const passwordSecurity = new PasswordSecurity()
        //repository
        const authRepository = new AuthRepository(passwordSecurity);
        const userRepository = new UserRepository(mySQLUser);
        //service
        const authService = new AuthService(authRepository, userRepository);
        const jwtService = new JWTService()
        return new AuthUseCase(authService, jwtService);
    }
    public static createUserUseCase(mySQLUser: MySQLUser): UserUseCasePort {
        const userRepository = new UserRepository(mySQLUser)
        const userService = new UserService(userRepository)
        return new UserUseCase(userService)

    }

}
