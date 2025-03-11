import Product from "../../../product/domain/product/Product";
import Cart from "../../domain/cart/Cart";
import NullCart from "../../domain/cart/NullCart";
import CartServicePort from "../../domain/port/driver/service/CartServicePort";
import CartUseCasePort from "../../domain/port/driver/usecase/CartUseCasePort";

export default class CartUseCase implements CartUseCasePort {
    constructor(private readonly cartService: CartServicePort) { }
    async getCartById(id: string): Promise<Cart> {
        return await this.cartService.getCartById(id)
    };
    addItemToCart: (id: string, item: Product) => Promise<Cart> = async (_id: string, _item: Product) => {
        // Implementation here
        return new NullCart();
    };
    createCart: (cart: string) => Promise<Cart> = async (_cart: string) => {
        // Implementation here
        return new NullCart();
    };
    getCartTotalPrice: (id: string) => Promise<number> = async (_id: string) => {
        // Implementation here
        return 0;
    };
    deleteItemFromCart: (id: string, item: Product) => Promise<boolean> = async (_id: string, _item: Product) => {
        // Implementation here
        return true;
    };
    deleteCart: (id: string) => Promise<boolean> = async (_id: string) => {
        // Implementation here
        return true;
    };

}