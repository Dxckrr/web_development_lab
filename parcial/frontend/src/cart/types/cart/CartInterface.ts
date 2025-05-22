import Product from "../../../products/types/product/Product.js";

export default interface CartInterface {
    id: number;
    products: { product: Product; quantity: number }[];
}