import Product from "../../../../../product/domain/product/Product"
import Cart from "../../../cart/Cart"

export default interface CartUseCasePort {
    getCartById: (id: string) => Promise<Cart>
    addItemToCart: (id: string, item: Product) => Promise<Cart>
    createCart: (cart: string) => Promise<Cart>
    getCartTotalPrice: (id: string) => Promise<number>
    deleteItemFromCart: (id: string, item: Product) => Promise<boolean>
    // increaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    // decreaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    deleteCart: (id: string) => Promise<boolean>

}