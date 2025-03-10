import Product from "../../domain/product/Product";
import ProductServicePort from "../../domain/port/driver/service/ProductService";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
export default class ProductService implements ProductServicePort {
    constructor(private readonly productRepository: ProductRepositoryPort) { }
    async getProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }
    async getProductById(productId: string): Promise<Product> {
        return await this.productRepository.findById(productId);
    }
    async getProductsByCategory(categoryId: string): Promise<Product[]> {
        return await this.productRepository.getByCategory(categoryId);
    }
    async getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        return await this.productRepository.getByPriceRange(minPrice,maxPrice);
    }
    addProduct(_product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateProduct(_product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(_productId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}