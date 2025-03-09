import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import { UserInterface } from "../../user/AbstractUser";
import { RegisterUserInterface } from "../../user/auth/AbstractRegisterUser";

export default interface UserRepositoryPort extends RepositoryInterface<string, UserInterface> {
    findByEmail(email: string): Promise<UserInterface>
    create(user: RegisterUserInterface): Promise<UserInterface | null>
}