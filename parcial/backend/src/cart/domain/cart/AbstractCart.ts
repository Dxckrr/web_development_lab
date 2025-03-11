import AbstractProduct from "../../../product/domain/product/AbstractProduct";
import AbstractUser from "../../../user/domain/user/AbstractUser";

export default abstract class Cart {
    protected id: number;
    protected userOwner: AbstractUser;
    protected products: { product: AbstractProduct; quantity: number }[];

    constructor(cartInterface: CartInterface) {
        this.id = cartInterface.id;
        this.userOwner = cartInterface.userOwner;
        this.products = cartInterface.products;
    }

    public getId(): number {
        return this.id;
    }

    public getUser(): AbstractUser {
        return this.userOwner;
    }

    public getItems(): { product: AbstractProduct; quantity: number }[] {
        return this.products;
    }

    public getTotalItems(): number {
        return this.products.reduce((total, item) => total + item.quantity, 0);
    }
    
    public getTotalPrice(): number {
        return this.products.reduce((total, item) => total + (item.product.getPrice() * item.quantity), 0);
    }

    public addItem(product: AbstractProduct, quantity: number = 1): void {
        const existingItem = this.products.find(item => item.product.getId() === product.getId());
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.products.push({ product, quantity });
        }
    }

    public removeItem(productId: number, quantity: number = 1): void {
        const index = this.products.findIndex(item => item.product.getId() === productId);
        if (index !== -1) {
            if (this.products[index] && this.products[index].quantity > quantity) {
                this.products[index].quantity -= quantity;
            } else {
                this.products.splice(index, 1);
            }
        }
    }
}

interface CartInterface {
    id: number;
    userOwner: AbstractUser;
    products: { product: AbstractProduct; quantity: number }[];
}

export { CartInterface };