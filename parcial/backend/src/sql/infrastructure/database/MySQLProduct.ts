import MySQLProductInterface from "../../domain/interfaces/MYSQLProductInterface";
import { ProductSQL } from "../../domain/models/product/SQLProduct";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLProduct implements MySQLProductInterface {
    async findAllProducts(): Promise<ProductSQL[]> {
        const query = 'SELECT * FROM buenavidaparcial.products;';
        return await MySQLDatabase.executeQuery(query);
    }
    async findById(id: string): Promise<ProductSQL> {
        const query = 'SELECT * FROM buenavidaparcial.products WHERE id = ?;';
        const res = await MySQLDatabase.executeQuery(query, [id]);
        return res[0];
    }
    async findByName(name: string): Promise<ProductSQL[]> {
        const query = 'SELECT * FROM buenavidaparcial.products WHERE name LIKE ?;';
        return await MySQLDatabase.executeQuery(query, [`%${name}%`]);
    }
    async findByCategoryId(category: string): Promise<ProductSQL[]> {
        const query = 'SELECT * FROM buenavidaparcial.products WHERE category_id =?;';
        return await MySQLDatabase.executeQuery(query, [category]);
    }
    async findByPriceRange(minPrice: number, maxPrice: number): Promise<ProductSQL[]> {
        const query = 'SELECT * FROM buenavidaparcial.products WHERE price BETWEEN ? AND ? ;';
        return await MySQLDatabase.executeQuery(query, [minPrice, maxPrice]);
    }
    async deleteById(id: string): Promise<boolean> {
        const query = 'DELETE FROM buenavidaparcial.products WHERE id =?;';
        const res = await MySQLDatabase.executeQuery(query, [id]);
        return res.affectedRows > 0;
    }
    async updateProductStock(id: string, item: number): Promise<boolean> {
        const query = 'UPDATE buenavidaparcial.products SET stock = stock + ? WHERE id = ?;';
        const res = await MySQLDatabase.executeQuery(query, [item, id]);
        return res.affectedRows > 0;
    }


}