import Product from "../../../product/Product";

export default interface ProductServicePort {
    getProducts(): Promise<Product[]>;
    getProductById(productId: string): Promise<Product>;
    getProductsByName(productName: string): Promise<Product[]>;
    addProduct(product: Product): Promise<Product>;
    updateProduct(product: Product): Promise<void>;
    deleteProduct(productId: string): Promise<boolean>;
    getProductsByCategory(categoryId: string): Promise<Product[]>;
    getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]>;
    getImage(filename: string) : string;
    updateStock(id: string, quantity: number): Promise<Product>

}