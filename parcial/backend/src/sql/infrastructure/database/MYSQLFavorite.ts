// import Favorite from "../../../favorites/domain/favorite/Favorite";
import MYSQLFavoriteInterface from "../../domain/interfaces/MYSQLFavoriteInterface";
import MySQLDatabase from "./MySQLDatabase";

export default class MYSQLFavorite implements MYSQLFavoriteInterface {
    async getAll(userId: number): Promise<boolean> {
        const query = `
        SELECT p.id, p.name, p.price, p.description, p.stock, p.image_url, p.category_id 
        FROM user_favorites uf
        JOIN products p ON uf.product_id = p.id
        WHERE uf.user_id = ?;`;

        const [rows]: any = await MySQLDatabase.executeQuery(query, [userId]);

        // Mapear los productos favoritos
        // const products = rows.map((row: any) => ({
        //     id: row.id,
        //     name: row.name,
        //     price: row.price,
        //     description: row.description,
        //     stock: row.stock,
        //     imageUrl: row.image_url,
        //     categoryId: row.category_id
        // }));
        console.log(rows)
        return true

    }
} 