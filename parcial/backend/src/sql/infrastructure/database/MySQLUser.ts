import { UserInterface } from "../../../user/domain/user/AbstractUser";
import { RegisterUserInterface } from "../../../user/domain/user/auth/AbstractRegisterUser";
import MySQLUserInterface from "../../domain/interfaces/MYSQLUserInterface";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLUser implements MySQLUserInterface {
    public async createUser(user: RegisterUserInterface): Promise<UserInterface | null> {
        const query = `
            INSERT INTO buenavidaparcial.users (names, surnames, email, password, role) 
            VALUES (?, ?, ?, ?, ?);
        `;
        const values = [
            user.names,
            user.surnames,
            user.email,
            user.password,
            user.role,
        ];
        const result = await MySQLDatabase.executeQuery(query, values);

        if (result.affectedRows > 0) {
            return { ...user, id: result.insertId, creation_date: new Date() };
        }
        return null
    }

    public async findByEmail(email: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE email = ?;';
        let res = await MySQLDatabase.executeQuery(query, [email]);
        return res[0]
    }

    public async findAll(): Promise<UserInterface[]> {
        const query = 'SELECT * FROM buenavidaparcial.users;';
        return await MySQLDatabase.executeQuery(query);
    };
    public async findById(id: string): Promise<UserInterface> {
        const query = 'SELECT * FROM buenavidaparcial.users WHERE id = ?;';
        let res = await MySQLDatabase.executeQuery(query, [id]);
        return res[0]
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
}