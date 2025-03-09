import RegisterUser from "../../../../user/domain/user/auth/RegisterUser";
import NullUser from "../../../../user/domain/user/NullUser";
import User from "../../../../user/domain/user/User";
import MySQLAuthInterface from "../../../domain/interfaces/auth/MySQLAuthInterface";

export default class MySQLAuth implements MySQLAuthInterface {
    hashPassword(_password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    comparePasswords(_password: string, _hashedPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
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
    update = (_id: string, _item: Partial<User>): Promise<boolean | User> => {
        return Promise.resolve(false)
    };
    patch = (_id: string, _item: Partial<User>): Promise<User> => {
        return Promise.resolve(new NullUser())
    };
    delete = (_id: string): Promise<boolean> => {
        return Promise.resolve(false)
    };

}