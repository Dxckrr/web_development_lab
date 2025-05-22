import CartModel from "../model/CartModel";
import CartView from "../view/CartView";

export default class CartController {
    constructor(
        private readonly model: CartModel,
        private readonly view: CartView
    ) { }

    readonly init = () => {
        this.model.init();
        this.view.init();
        console.log("CartController initialized");
    }
}