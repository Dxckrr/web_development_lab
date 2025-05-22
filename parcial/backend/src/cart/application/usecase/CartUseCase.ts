import Cart from "../../domain/cart/Cart";
import NullCart from "../../domain/cart/NullCart";
import CartServicePort from "../../domain/port/driver/service/CartServicePort";
import CartUseCasePort from "../../domain/port/driver/usecase/CartUseCasePort";

export default class CartUseCase implements CartUseCasePort {
    constructor(private readonly cartService: CartServicePort) { }
    async getCartById(id: string): Promise<Cart> {
        return await this.cartService.getCartById(id)
    };
    async addItemToCart(id: string, product_id: string, quantity: number): Promise<Cart> {
        return await this.cartService.addItemToCart(id, product_id, quantity)
    };
    createCart: (cart: string) => Promise<Cart> = async (_cart: string) => {
        // Implementation here
        return new NullCart();
    };
    getCartTotalPrice: (id: string) => Promise<number> = async (_id: string) => {
        // Implementation here
        return 0;
    };
    async deleteItemFromCart(_id: string, _product_id: string): Promise<Cart> {
        // Implementation here
        return new NullCart();
    };
    deleteCart: (id: string) => Promise<boolean> = async (_id: string) => {
        // Implementation here
        return true;
    };

}