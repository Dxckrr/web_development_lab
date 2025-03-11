import MySQLCartInterface from "../../domain/interfaces/MYSQLCartInterface";
import CartSQL from "../../domain/models/cart/SQLCart";
import MySQLDatabase from "./MySQLDatabase";

export default class MySQLCart implements MySQLCartInterface {
    async findById(id: string): Promise<CartSQL> {
        const query = `SELECT 
                    c.id AS cart_id,
                    c.user_id,
                    c.created_at,
                    ci.product_id,
                    ci.quantity
                    FROM cart c
                    LEFT JOIN cart_items ci ON c.id = ci.cart_id
                    WHERE c.id = ?; `;
        const res = await MySQLDatabase.executeQuery(query, [id]);
        // Reconstrucción del objeto CartSQL
        const cart: CartSQL = {
            id: res[0].cart_id,
            user_id: res[0].user_id,
            created_at: res[0].created_at,
            items: res.map((row :any) => ({
                product_id: row.product_id,
                quantity: row.quantity
            }))
        };

        return cart;
    }
}