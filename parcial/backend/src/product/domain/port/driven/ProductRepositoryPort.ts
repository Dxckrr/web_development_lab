import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Product from "../../product/Product";
export default interface ProductRepositoryPort extends RepositoryInterface<string, Product> {
    getByCategory(category: string): Promise<Product[]>
    getByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>

}