import PasswordSecurityInterface from "../../../../bycrypt/domain/PasswordSecurityInterface";
import AuthRepositoryPort from "../../../domain/port/driven/auth/AuthRepositoryPort";
import RegisterUser from "../../../domain/user/auth/RegisterUser";
import NullUser from "../../../domain/user/NullUser";
import User from "../../../domain/user/User";

export default class AuthRepository implements AuthRepositoryPort {
    constructor(
        private readonly passwordSecurity: PasswordSecurityInterface,
    ) {
    }
    async hashPassword(password: string): Promise<string> {
        return this.passwordSecurity.hashPassword(password)
    }
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await this.passwordSecurity.comparePasswords(password, hashedPassword)
    }
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
    update = (_id: string, _item: Partial<User>): Promise<User | boolean> => {
        return Promise.resolve(false)
    };
    patch = (_id: string, _item: Partial<User>): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    delete = (_id: string): Promise<boolean> => {
        return Promise.resolve(false)
    };
}