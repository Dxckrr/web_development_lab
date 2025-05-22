import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Product from "../../product/Product";
export default interface ProductRepositoryPort extends RepositoryInterface<string, Product> {
    getByCategory(category: string): Promise<Product[]>
    getByName(name: string): Promise<Product[]>
    getByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>
    updateProductStock(id: string, quantity: number): Promise<boolean>

}