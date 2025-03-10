import { UserInterface } from "../../../user/domain/user/AbstractUser"
import { RegisterUserInterface } from "../../../user/domain/user/auth/AbstractRegisterUser"
export default interface MySQLUserInterface {
    createUser(user: RegisterUserInterface): Promise<UserInterface | null>
    findAll(): Promise<UserInterface[]>
    findByEmail(email: string): Promise<UserInterface>
    findById(id: string): Promise<UserInterface>
    update(id: string, item: Partial<UserInterface>): Promise<boolean | UserInterface>
    delete(id: string): Promise<boolean>
}