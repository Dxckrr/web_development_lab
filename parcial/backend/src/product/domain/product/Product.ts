import AbstractImage from "../image/AbstractImage";

export default abstract class AbstractProduct {
    protected id: number
    protected name: string
    protected price: number
    protected description: string
    protected category: string
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

}

interface ProductInterface {
    id: number,
    name: string,
    price: number,
    description: string,
    category: string,
    stock: number,
    image: AbstractImage
}
export { ProductInterface }