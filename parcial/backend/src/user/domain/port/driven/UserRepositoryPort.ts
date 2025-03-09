import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import { UserInterface } from "../../user/AbstractUser";

export default interface UserRepositoryPort extends RepositoryInterface<string, UserInterface> {
    findByEmail(email: string): Promise<UserInterface>
}