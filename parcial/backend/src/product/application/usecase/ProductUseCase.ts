import ProductServicePort from "../../domain/port/driver/service/ProductService";
import ProductUseCasePort from "../../domain/port/driver/usecase/ProductUseCase";
import Product from "../../domain/product/Product";

export default class ProductUseCase implements ProductUseCasePort {
    constructor(private readonly productService : ProductServicePort){}
    public async getProducts(): Promise<Product[]> {
        let products = await this.productService.getProducts();
        return products;
    }
    async getProductById(productId: string): Promise<Product> {
        return await this.productService.getProductById(productId)
    }
    async getProductsByCategory(categoryId: string): Promise<Product[]> {
        return await this.productService.getProductsByCategory(categoryId)
    }
    async getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        return await this.productService.getProductsByPriceRange(minPrice, maxPrice)
    }
    
    async addProduct(product: Product): Promise<void> {
        await this.productService.addProduct(product)
    }
    async updateProduct(product: Product): Promise<void> {
        await this.productService.updateProduct(product)
    }
    async deleteProduct(productId: string): Promise<void> {
        await this.productService.deleteProduct(productId)
    }

}