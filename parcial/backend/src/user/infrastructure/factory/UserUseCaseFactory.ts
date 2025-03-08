import LoginService from "../../application/service/auth/AuthService"
import AuthUseCase from "../../application/usecase/auth/AuthUseCase";
import UserAuthPort from "../../domain/port/driver/usecase/auth/AuthUseCase";
import AuthRepository from "../repository/auth/AuthRepository"

export default class UserUseCaseFactory {
    public static createAuthUseCase(): UserAuthPort {
        const authRepository = new AuthRepository();
        const loginService = new LoginService(authRepository);
        return new AuthUseCase(loginService);
    }

}
