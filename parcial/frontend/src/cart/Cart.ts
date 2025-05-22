import CartController from "./controller/CartController.js";
import CartModel from "./model/CartModel.js";
import CartView from "./view/CartView.js";

export default class Cart {
    private readonly model: CartModel;
    private readonly view: CartView;
    private readonly controller: CartController;

    constructor(element: string) {
        this.model = new CartModel();
        this.view = new CartView(this.model, element);
        this.controller = new CartController(this.model, this.view);
    }

    readonly init = () => {
        this.controller.init();
    }

    readonly getCartHTML = (): HTMLElement => {
        return this.view.getCartHTML();
    }
    readonly renderCartDropDownHTML = async (): Promise<string> => {
        return this.view.renderDropdown();
    }
}