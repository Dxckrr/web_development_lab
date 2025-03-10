import Product from "../../domain/product/Product";
import ProductServicePort from "../../domain/port/driver/service/ProductService";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
export default class ProductService implements ProductServicePort {
    constructor(private readonly productRepository: ProductRepositoryPort) { }
    async getProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }
    getProductById(_productId: string): Promise<Product> {
        throw new Error("Method not implemented.");
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
    searchProductsByCategory(_categoryId: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    searchProductsByPriceRange(_minPrice: number, _maxPrice: number): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }

}