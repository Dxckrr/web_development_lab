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
    public async update(id: string, item: Partial<UserInterface>): Promise<boolean | UserInterface> {
        const fields = Object.keys(item).map(field => `${field} = ?`).join(', ');
        const values = Object.values(item);
        if (fields.length === 0) {
            return false;
        }
        const query = `UPDATE buenavidaparcial.users SET ${fields} WHERE id = ?;`;
        const result = await MySQLDatabase.executeQuery(query, [...values, id]);

        return result.affectedRows > 0;
    }

    public async delete(id: string): Promise<boolean> {
        const query = 'DELETE FROM buenavidaparcial.users WHERE id = ?;';
        const result = await MySQLDatabase.executeQuery(query, [id]);
        return result.affectedRows > 0;
    }
    save = (_item: UserInterface) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<UserInterface>) => {
        throw new Error("Method not implemented.")
    }
}