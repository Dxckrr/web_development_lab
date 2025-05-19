import Discount from "../discount/Discount.js";

export default interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    discount: Discount;
    brand: string;
    units: string;
    // ??
    // unit: number;
}