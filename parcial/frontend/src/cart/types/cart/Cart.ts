import Product from "../../../products/types/product/Product.js";

export default interface Cart {
    id: number;
    products: { product: Product; quantity: number }[];
}