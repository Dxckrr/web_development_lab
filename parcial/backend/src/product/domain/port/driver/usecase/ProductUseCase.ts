import Product from "../../../product/Product";

export default interface ProductUseCasePort {
    getProducts(): Promise<Product[]>;
    getProductById(productId: string): Promise<Product>;
    addProduct(product: Product): Promise<void>;
    updateProduct(product: Product): Promise<void>;
    deleteProduct(productId: string): Promise<void>;
    searchProductsByCategory(categoryId: string): Promise<Product[]>;
    searchProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>;
    
}