import { UserInterface } from "../../../user/AbstractUser";
import User from "../../../user/User";

export default interface UserServicePort {
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>
    update(id: string, item: Partial<UserInterface>): Promise<User | boolean>
    delete(id: string): Promise<boolean>

}