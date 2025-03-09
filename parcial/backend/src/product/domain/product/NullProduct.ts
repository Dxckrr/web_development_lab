import NullCategory from "../category/NullCategory";
import NullImage from "../image/NullImage";
import AbstractProduct from "./AbstractProduct";

export default class NullProduct extends AbstractProduct {
    constructor() {
        super({
            id: 0,
            name: "Not found",
            price: 0,
            description: "Not found",
            category: new NullCategory(),
            stock: 0,
            image: new NullImage(),
        })
    }
    public isNull = (): boolean => true;
}