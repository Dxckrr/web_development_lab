import CartSQL from "../models/cart/SQLCart";

export default interface MySQLCartInterface {
    findById(id: string): Promise<CartSQL>;
    addItemToCart(id: string, product_id: string, quantity: number): Promise<CartSQL>;
    deleteItemFromCart(id: string, product_id: string): Promise<CartSQL>;
}
