import { UserInterface } from "../../../user/AbstractUser";
import { RegisterUserInterface } from "../../../user/auth/AbstractRegisterUser";
import User from "../../../user/User";

export default interface UserServicePort {
    createUser(item: RegisterUserInterface): Promise<User | null>
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>
    updateUser(id: string, item: Partial<UserInterface>): Promise<User | boolean>
    deleteUser(id: string): Promise<boolean>

}