import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Product from "../../product/Product";
export default interface ProductRepositoryPort extends RepositoryInterface<string, Product> {
    findByCategory(category: string): Promise<Product[]>
    findByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>

}