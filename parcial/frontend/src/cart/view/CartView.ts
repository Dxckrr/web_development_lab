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
                        await this.deleteItem(productId);
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

    readonly deleteItem = async (productId: string): Promise<void> => {
        const userId = localStorage.getItem('authToken');

        if (!userId) {
            console.error("No se encontró el authToken en localStorage");
            return;
        }

        const response = await fetch(`http://localhost:1802/cart/delete/item/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_id: productId }),
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`Error en el fetch: ${response.statusText}`);
        }
    }


}