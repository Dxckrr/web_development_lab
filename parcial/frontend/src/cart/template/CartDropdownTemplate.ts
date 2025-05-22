import Cart from "../types/cart/Cart.js"
import Product from "../../products/types/product/Product.js"

export default class CartDropdownTemplate {
    constructor() { }

    readonly renderCartDropdownContent = async (cart: Cart): Promise<string> => {
        let htmlProducts = ``
        if (cart.products.length > 0) {
            const products = await Promise.all(cart.products.map(async ({ product, quantity }: { product: Product; quantity: number }) => {
                return `
                    <div class="product-item">
                        <img src="${await this.getImage(product.id + ".jpg")}" class="product-img">
                        <div class="flex-grow-1 d-flex flex-column">
                            <div class="d-flex flex-row">
                                <div>
                                    <div class="fw-bold small">${product.name}</div>
                                    <div class="text-muted small">${product.stock}</div>
                                </div>
                                <i class="bi bi-x fs-4" style="line-height: 0;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-end">
                                    <span class="me-2 small text-muted">Cantidad:</span>
                                    <input type="number" class="form-control text-center" id="numberInput" min="1" max="100" step="1" value="${quantity}">
                                </div>
                                <div class="text-end small price">
                                    <p class="m-0 text-nowrap">${this.formatToMoney(product.price)}</p>
                                </div>
                            </div>
                            <div class="d-flex flex-column justify-content-between">
                            </div>
                        </div>
                    </div>
                `
            }))
            htmlProducts = `
                <div class="cart-items-scroll" id="products-cart-dropdown">
                    ${products.join("")}
                </div>

                <div id="total-cart-dropdown">
                    <div class="d-flex justify-content-between small subtotal">
                        <span class="text-muted">Subtotal</span>
                        <span class="text-muted">${this.getTotal(cart.products)}</span>
                    </div>
                    <div class="d-flex justify-content-between fw-bold total">
                        <span>TOTAL <span>(IVA incluido)</span></span>
                        <span>${this.getTotal(cart.products)}</span>
                    </div>
                    <div class="small mt-1 color-green">Te faltan 6,60 € para disfrutar del envío gratuito.</div>
                </div>
            `
        } else {
            htmlProducts = `<div class="text-center mt-2">Carrito vacio :(</div>`
        }

        return `
            <div class="d-flex justify-content-between align-items-center head-modal">
                <span class="fw-bold color-green">MI CARRITO (${cart.products.length})</span>
                <i class="bi bi-x fs-2 close-btn" id="close-cart-dropdown"></i>
            </div>
            ${htmlProducts}
        `
    }

    private readonly getImage = async (image: string): Promise<string> => {
        const path = `./img/products/`;
        const imagePath = `${path}${image}`;
        try {
            const response = await fetch(imagePath);
            if (response.ok) return imagePath;
        } catch (err) {
            console.error("Error fetching image:", err);
        }
        return `${path}not-icon.jpg`;
    }

    private readonly formatToMoney = (value: number): string => {
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
        })
        return formatter.format(value)
    }
    private readonly getTotal = (products: any[]): string => {
        const total = products.reduce((acc, { product, quantity }) => {
            const price = parseFloat(product.price); // convertir de string a número
            return acc + (price * quantity);
        }, 0);

        return this.formatToMoney(total);
    };

}