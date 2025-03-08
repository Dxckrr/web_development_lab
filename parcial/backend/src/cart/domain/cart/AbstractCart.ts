import AbstractProduct from "../../../product/domain/product/AbstractProduct";

export default abstract class Cart {
    protected id: number;
    protected userId: number;
    protected items: Map<number, { product: AbstractProduct; quantity: number }>;

    constructor(cartInterface: CartInterface) {
        this.id = cartInterface.id;
        this.userId = cartInterface.userId;
        this.items = new Map(cartInterface.items);
    }

    public getId(): number {
        return this.id;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getItems(): { product: AbstractProduct; quantity: number }[] {
        return Array.from(this.items.values());
    }

    public getTotalItems(): number {
        return Array.from(this.items.values()).reduce((total, item) => total + item.quantity, 0);
    }

    public addItem(product: AbstractProduct, quantity: number = 1): void {
        const productId = product.getId();
        if (this.items.has(productId)) {
            this.items.get(productId)!.quantity += quantity;
        } else {
            this.items.set(productId, { product, quantity });
        }
    }

    public removeItem(productId: number, quantity: number = 1): void {
        if (this.items.has(productId)) {
            const item = this.items.get(productId)!;
            if (item.quantity > quantity) {
                item.quantity -= quantity;
            } else {
                this.items.delete(productId);
            }
        }
    }
}
interface CartInterface {
    id: number;
    userId: number;
    items: Map<number, { product: AbstractProduct; quantity: number }>;
}
export { CartInterface }
