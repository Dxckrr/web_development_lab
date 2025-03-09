import RegisterUser from "../../../user/auth/RegisterUser";
import User from "../../../user/User";

export default interface AuthRepositoryPort {
    logout(user: User): Promise<void>; 
    register(user: RegisterUser): Promise<User>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>;


}