import NullDiscount from "../discount/NullDiscount.js";
import NullCategory from "./category/NullCategory.js";
import NullImage from "./image/NullImage.js";

export default {
    id: "",
    name: "",
    description: "",
    price: 0,
    category: NullCategory,
    discount: NullDiscount,
    stock: 0,
    image: NullImage,
    // ??
    // unit: number;
}