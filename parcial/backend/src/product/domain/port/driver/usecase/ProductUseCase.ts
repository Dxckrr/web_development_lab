import Product from "../../../product/Product";

export default interface ProductUseCasePort {
    getProducts(): Promise<Product[]>;
}