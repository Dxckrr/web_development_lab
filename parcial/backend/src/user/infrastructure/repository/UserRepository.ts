import MySQLUser from "../../../sql/infrastructure/database/MySQLUser";
import UserRepositoryPort from "../../domain/port/driven/UserRepositoryPort";
import NullUser from "../../domain/user/NullUser";
import User from "../../domain/user/User";

export default class UserRepository implements UserRepositoryPort {
    constructor(private readonly mySQLUser: MySQLUser){

    }

    async findByEmail(email: string): Promise<User> {
        return await this.mySQLUser.findByEmail(email)
    }
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
