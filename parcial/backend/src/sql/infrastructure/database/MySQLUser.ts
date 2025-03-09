import { UserInterface } from "../../../user/domain/user/AbstractUser";
import MySQLUserInterface from "../../domain/interfaces/MYSQLUserInterface";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLUser implements MySQLUserInterface {

    public async findByEmail(email: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE email = ?;';
        let res = await MySQLDatabase.executeQuery(query, [email]);
        res = res[0]
        return res
    }

    public async findAll(): Promise<UserInterface[]> {
        const query = 'SELECT * FROM buenavidaparcial.users;';
        return await MySQLDatabase.executeQuery(query);
    };
    public async findById(id: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE id = ?;';
        let res = await MySQLDatabase.executeQuery(query, [id]);
        res = res[0]
        return res;
    }
    update = (_id: string, _item: Partial<UserInterface>): Promise<boolean | UserInterface> => {
        throw new Error("Method not implemented.")
    }
    delete = (_id: string): Promise<boolean> => {
        throw new Error("Method not implemented.")
    }
    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}