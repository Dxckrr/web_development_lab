import User from "../../../user/User";

export default interface AuthRepositoryPort {
    logout(user: User): Promise<void>; 
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>;


}