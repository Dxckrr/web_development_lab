import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import RegisterUser from "../../../domain/user/auth/RegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";

export default class AuthRepository implements AuthRepositoryPort {
    login = async (_email: string, _password: string): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    logout(_user: User): Promise<void> {
        return Promise.resolve()
    }
    register = async (_user: RegisterUser): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    findAll = async (): Promise<User[]> => {
        return Promise.resolve([new NullUser()])
    };
    findById = (_id: string): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    save = (_item: User): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    update = (_id: string, _item: User): Promise<boolean | User> => {
        return Promise.resolve(false)
    };
    patch = (_id: string, _item: Partial<User>): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    delete = (_id: string): Promise<boolean> => {
        return Promise.resolve(false)
    };
}