import AbstractProduct from "../../../product/domain/product/Product";

export default abstract class Cart {
    protected id: number;
    protected userId: number;
    protected items: AbstractProduct[];
    protected totalItems: number;

    constructor(cart: CartInterface) {
        this.id = cart.id;
        this.userId = cart.userId;
        this.items = cart.items;
        this.totalItems = cart.totalItems;
    }

    public getId(): number { return this.id }
    public getUserId(): number { return this.userId }
    public getItems(): AbstractProduct[] { return this.items }
    public getTotal(): number { return this.totalItems }
}

interface CartInterface {
    id: number,
    userId: number,
    items: AbstractProduct[],
    totalItems: number
}
export { CartInterface }