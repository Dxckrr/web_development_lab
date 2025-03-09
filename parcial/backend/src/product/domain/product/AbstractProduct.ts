import AbstractCategory from "../category/AbstractCategory";
import AbstractImage from "../image/AbstractImage";

export default abstract class AbstractProduct {
    protected id: number
    protected name: string
    protected price: number
    protected description: string
    protected category: AbstractCategory
    protected stock: number
    protected image: AbstractImage

    constructor(product: ProductInterface) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.category = product.category;
        this.stock = product.stock;
        this.image = product.image;
    }

    public abstract isNull(): boolean;
    public getId(): number { return this.id }
    public getName(): string { return this.name };
    public getDescription(): string { return this.description };
    public getPrice(): number { return this.price };
    public getStock(): number { return this.stock };
    public getImage(): AbstractImage { return this.image };
    public getCategory(): AbstractCategory { return this.category };
}
interface ProductInterface {
    id: number,
    name: string,
    price: number,
    description: string,
    category: AbstractCategory,
    stock: number,
    image: AbstractImage
}
export { ProductInterface }