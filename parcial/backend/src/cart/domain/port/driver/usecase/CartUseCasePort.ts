import Cart from "../../../cart/Cart"

export default interface CartUseCasePort {
    getCartById: (id: string) => Promise<Cart>
    addItemToCart: (id: string, product_id: string, quantity : number) => Promise<Cart>
    createCart: (cart: string) => Promise<Cart>
    getCartTotalPrice: (id: string) => Promise<number>
    deleteItemFromCart: (id: string, product_id: string) => Promise<Cart>
    // increaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    // decreaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    deleteCart: (id: string) => Promise<boolean>

}