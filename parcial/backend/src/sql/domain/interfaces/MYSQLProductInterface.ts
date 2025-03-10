import { ProductSQL } from "../models/product/SQLProduct";

export default interface MySQLProductInterface{
    findAllProducts(): Promise<ProductSQL[]>;
}
