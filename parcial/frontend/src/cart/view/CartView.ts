import Observer from "../../shared/types/Observer.js";
import CartModel from "../model/CartModel.js";
import CartTemplate from "../template/CartTemplate.js";
import CartDropdownTemplate from "../template/CartDropdownTemplate.js";


export default class CartView extends Observer<CartModel> {
    private readonly cartHTML: HTMLElement;

    constructor(cartModel: CartModel, element: string) {
        super(cartModel);
        const cart = document.createElement(`${element}`);
        this.cartHTML = cart;
    }

    readonly init = (): void => {
        this.render();
        console.log("CartView initialized");
    }
    readonly update = (): void => {
        this.render()
    }
    readonly getCartHTML = (): HTMLElement => {
        this.cartHTML.classList.add("w-100");
        return this.cartHTML;
    }
    private async deleteItemCart(productId: string): Promise<void> {
        const cartModel = this.subject as CartModel;
        await cartModel.deleteItem(productId); // Este método debe estar en tu modelo
    }

    readonly render = async (): Promise<void> => {
        const cartModel = (this.subject as CartModel);
        const cartData = cartModel.getCart();
        const cartTemplate = new CartTemplate(cartData);
        this.cartHTML.innerHTML = await cartTemplate.renderCart();
    }
    readonly renderDropdown = async (): Promise<string> => {
        const template = new CartDropdownTemplate();
        const cartModel = (this.subject as CartModel);

        const dropdown = await template.renderCartDropdownContent(cartModel.getCart())

        return dropdown
    }

    readonly assignDeleteItemEvent = (): void => {
        console.log(document.querySelectorAll(".delete-cart-item"));
        document.querySelectorAll(".delete-cart-item").forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                console.log("click en eliminar producto");
                const button = e.currentTarget as HTMLButtonElement;
                const productId = button.dataset['id'];
                if (productId) {
                    try {
                        await this.deleteItemCart(productId);
                        this.update();
                    } catch (err) {
                        console.error("Error al eliminar el producto:", err);
                    }
                }
                this.update();
            });
        }

        );
    }
}