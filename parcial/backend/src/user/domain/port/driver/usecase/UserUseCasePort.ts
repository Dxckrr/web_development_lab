import { UserInterface } from "../../../user/AbstractUser";
import { RegisterUserInterface } from "../../../user/auth/AbstractRegisterUser";
import User from "../../../user/User";

export default interface UserUseCasePort {
    create(item: RegisterUserInterface) : Promise<User | null>
    getAll() : Promise<User[]>
    getById(id: string) : Promise<User>
    update(id:string, item: Partial<UserInterface>) : Promise<User | boolean>
    delete(id: string) : Promise<boolean>
}
