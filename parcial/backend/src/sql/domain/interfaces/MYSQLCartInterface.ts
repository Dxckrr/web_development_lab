import CartSQL from "../models/cart/SQLCart";

export default interface MySQLCartInterface{
    findById(id : string): Promise<CartSQL>;
}
