
// import NullDiscount from "../../products/types/discount/NullDiscount.js";
import Subject from "../../shared/types/Subject.js"
import CartInterface from "../types/cart/CartInterface.js";
import NullCart from "../types/cart/NullCart.js";
import CartView from "../view/CartView.js"

export default class CartModel extends Subject<CartView> {
    private cart: CartInterface;
    constructor() {
        super()
        this.cart = NullCart

    }
    readonly init = async () => {
        console.log("CartModel initialized")
        this.cart = await this.loadData();
        this.notifyALL()

    }
    readonly getCart = () => {
        return this.cart
    }
    readonly loadData = async (): Promise<CartInterface> => {
        let cart: CartInterface = {
            id: 1,
            products: []
        };
        return cart;
    };
}