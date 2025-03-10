import MySQLCategoryInterface from "../../domain/interfaces/MYSQLCategoryInterface";
import { CategorySQL } from "../../domain/models/category/SQLCategory";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLCategory implements MySQLCategoryInterface {
    async findCategoryById(id: string): Promise<CategorySQL> {
        const query = 'SELECT * FROM buenavidaparcial.categories WHERE id = ?;';
        let res = await MySQLDatabase.executeQuery(query, [id]);
        res = res[0]
        return res
    }

}