import MySQLProductInterface from "../../domain/interfaces/MYSQLProductInterface";
import { ProductSQL } from "../../domain/models/product/SQLProduct";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLProduct implements MySQLProductInterface {
    async findAllProducts(): Promise<ProductSQL[]> {
        const query = 'SELECT * FROM buenavidaparcial.products;';
        return await MySQLDatabase.executeQuery(query);
    }

}