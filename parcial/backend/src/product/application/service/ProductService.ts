import Product from "../../domain/product/Product";
import ProductServicePort from "../../domain/port/driver/service/ProductService";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
import NullProduct from "../../domain/product/NullProduct";
import ImageRepositoryPort from "../../domain/port/driven/ImageRepositoryPort";

export default class ProductService implements ProductServicePort {
    constructor(private readonly productRepository: ProductRepositoryPort,
        private readonly imageRepository: ImageRepositoryPort
    ) { }
    async getProducts(): Promise<Product[]> {
        const products = await this.productRepository.findAll();
        if (products.length === 0) {
            return [new NullProduct()]
        }
        return products;
    }
    async getProductById(productId: string): Promise<Product> {
        if (productId === undefined || productId === null) {
            return Promise.resolve(new NullProduct())
        }
        const product = await this.productRepository.findById(productId)
        if (product === undefined || product === null) {
            return Promise.resolve(new NullProduct())
        }
        return product
    }
    async getProductsByName(name: string): Promise<Product[]> {
        if (name === undefined || name === null) {
            return [new NullProduct()]
        }
        if (name.length < 3) {
            return Promise.resolve([]);
        }
        const products = await this.productRepository.getByName(name);
        if (products.length === 0) {
            return [new NullProduct()]
        }
        return products;
    }
    async getProductsByCategory(categoryId: string): Promise<Product[]> {
        if (categoryId === undefined || categoryId === null) {
            return [new NullProduct()]
        }
        const products = await this.productRepository.getByCategory(categoryId);
        if (products.length === 0) {
            return [new NullProduct()]
        }
        return products;
    }
    async getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        if (minPrice < 0) {
            return [new NullProduct()]
        }
        const products = await this.productRepository.getByPriceRange(minPrice, maxPrice);
        if (products.length === 0) {
            return [new NullProduct()]
        }
        return products;
    }
    async addProduct(product: Product): Promise<Product> {
        return await this.productRepository.save(product)
    }
    async updateStock(id: string, quantity: number): Promise<Product> {
        const success = await this.productRepository.updateProductStock(id, quantity)
        if (!success) {
            return new NullProduct();
        }
        return await this.getProductById(id);
    }
    updateProduct(_product: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteProduct(productId: string): Promise<boolean> {
        return await this.productRepository.delete(productId)
    }
    getImage(filename: string): string {
        return this.imageRepository.getImage(filename)
    }

}