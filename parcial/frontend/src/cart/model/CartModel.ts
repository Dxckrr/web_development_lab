
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
        const id = localStorage.getItem('authToken')
        try {
            const response = await fetch(`http://localhost:1802/cart/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error(`Error en el fetch: ${response.statusText}`);
            }
            const cart = await response.json();
            this.cart = cart;
            return this.cart
        } catch (error) {
            console.error('Error al filtrar vitrinas:', error);
            this.cart = NullCart;
            return this.cart;
        }
        this.notifyALL()

    }
    readonly deleteItem = async (productId: string): Promise<CartInterface> => {
        const userId = localStorage.getItem('authToken');

        if (!userId) {
            console.error("No se encontró el authToken en localStorage");
            this.cart = NullCart
            return this.cart;
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
        this.cart = await response.json();
        return this.cart
        this.notifyALL()
    }
}