import { CategoryInterface } from "../../../product/domain/category/AbstractCategory";
import MySQLCategoryInterface from "../../domain/interfaces/MYSQLCategoryInterface";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLCategory implements MySQLCategoryInterface {
    async findById(id: string): Promise<CategoryInterface> {
        const query = 'SELECT * FROM buenavidaparcial.categories WHERE id = ?;';
        let res = await MySQLDatabase.executeQuery(query, [id]);
        return res[0]
    }

}