import Cart from "../../domain/cart/Cart";
import NullCart from "../../domain/cart/NullCart";
import CartRepositoryPort from "../../domain/port/driven/CartRepositoryPort";
import CartServicePort from "../../domain/port/driver/service/CartServicePort";

export default class CartService implements CartServicePort {
    constructor(private readonly cartRepository: CartRepositoryPort) { }
    async getCartById(id: string): Promise<Cart> {
        if (id === null || id === undefined) {
            return new NullCart();
        }
        return await this.cartRepository.findById(id);
    };
    async addItemToCart(id: string, product_id: string, quantity: number): Promise<Cart> {
        if (id === null || product_id === null || id === undefined || product_id === undefined) {
            return new NullCart();
        }
        return await this.cartRepository.addItemToCart(id, product_id, quantity);
    };
    createCart: (cart: string) => Promise<Cart> = async (_cart: string) => {
        // Implementation here
        return new NullCart();
    };
    getCartTotalPrice: (id: string) => Promise<number> = async (_id: string) => {
        // Implementation here
        return 0;
    };
    async deleteItemFromCart(id: string, product_id: string): Promise<Cart> {
        if (id === null || product_id === null || id === undefined || product_id === undefined) {
            return new NullCart();
        }
        return await this.cartRepository.deleteItemFromCart(id, product_id);
    };
    deleteCart: (id: string) => Promise<boolean> = async (_id: string) => {
        // Implementation here
        return true;
    };

}