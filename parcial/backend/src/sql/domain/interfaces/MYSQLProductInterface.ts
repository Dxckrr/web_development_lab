import { ProductSQL } from "../models/product/SQLProduct";

export default interface MySQLProductInterface {
    // create(): Promise<boolean>
    findAllProducts(): Promise<ProductSQL[]>;
    findById(id: string): Promise<ProductSQL>;
    findByName(name: string): Promise<ProductSQL[]>
    findByCategoryId(category: string): Promise<ProductSQL[]>
    findByPriceRange(minPrice: number, maxPrice: number): Promise<ProductSQL[]>
    deleteById(id: string): Promise<boolean>
    updateProductStock(id: string, item: number): Promise<boolean>
}
