import MySQLUserInterface from "../../../sql/domain/interfaces/MYSQLUserInterface";
import UserRepositoryPort from "../../domain/port/driven/UserRepositoryPort";
import { UserInterface } from "../../domain/user/AbstractUser";
import { RegisterUserInterface } from "../../domain/user/auth/AbstractRegisterUser";

export default class UserRepository implements UserRepositoryPort {
    constructor(private readonly mySQLUser: MySQLUserInterface) {
    }
    async create(user: RegisterUserInterface): Promise<UserInterface | null> {
        return await this.mySQLUser.createUser(user)
    }
    async findByEmail(email: string): Promise<UserInterface> {
        return await this.mySQLUser.findByEmail(email)
    }
    async findAll(): Promise<UserInterface[]> {
        return await this.mySQLUser.findAll()
    };

    async findById(id: string): Promise<UserInterface> {
        return await this.mySQLUser.findById(id)
    }
    async update(id: string, item: Partial<UserInterface>): Promise<UserInterface | boolean> {
        return await this.mySQLUser.update(id, item)
    }
    async delete(id: string): Promise<boolean> {
        return await this.mySQLUser.delete(id)
    }
    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}
