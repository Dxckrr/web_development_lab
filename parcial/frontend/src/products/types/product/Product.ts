import Discount from "../discount/Discount.js";
import CategoryInterface from "./category/Category.js";
import ImageInterface from "./image/Image.js";

export default interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: CategoryInterface;
    discount?: Discount;
    stock: number;
    image: ImageInterface;
    // ??
    // unit: number;
}