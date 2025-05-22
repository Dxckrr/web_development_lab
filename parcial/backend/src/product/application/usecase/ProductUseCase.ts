import ProductServicePort from "../../domain/port/driver/service/ProductService";
import ProductUseCasePort from "../../domain/port/driver/usecase/ProductUseCase";
import Product from "../../domain/product/Product";

export default class ProductUseCase implements ProductUseCasePort {
    constructor(private readonly productService: ProductServicePort) { }
    public async getProducts(): Promise<Product[]> {
        return await this.productService.getProducts();
    }
    async getProductById(productId: string): Promise<Product> {
        return await this.productService.getProductById(productId)
    }
    async getProductsByName(name: string): Promise<Product[]> {
        return await this.productService.getProductsByName(name)
    }
    async getProductsByCategoryId(categoryId: string): Promise<Product[]> {
        return await this.productService.getProductsByCategory(categoryId)
    }
    async getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        return await this.productService.getProductsByPriceRange(minPrice, maxPrice)
    }
    async addProduct(product: Product): Promise<void> {
        await this.productService.addProduct(product)
    }
    async updateStock(id: string, quantity: number): Promise<Product> {
        return await this.productService.updateStock(id, quantity)
    }
    async updateProduct(product: Product): Promise<void> {
        await this.productService.updateProduct(product)
    }
    async deleteProduct(productId: string): Promise<boolean> {
        return await this.productService.deleteProduct(productId)
    }
    getImage(filename: string): string {
        return this.productService.getImage(filename)
    }
    

}