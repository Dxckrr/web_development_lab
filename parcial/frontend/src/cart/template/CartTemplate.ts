import Product from "../../products/types/product/Product.js";
import Cart from "../types/cart/Cart.js";

export default class NavbarTemplate {
    constructor(private readonly cart: Cart) {}

    readonly renderCart = async (): Promise<string> => {
        const cartItemsHtml = await Promise.all(
            this.cart.products.map(async ({ product, quantity }: { product: Product; quantity: number }) => {
                const imageUrl = await this.getImage(product.id + ".jpg");
                return `
                    <div class="cart-item row mb-3">
                        <div class="col-2">
                            <img src="${imageUrl}" alt="${product.name}" class="product-img" style="width: 100%;">
                        </div>
                        <div class="col-5">
                            <div class="product-details">
                                <div class="product-title">${product.name}</div>
                                <div class="product-meta">Talla: ${product.stock}</div>
                                <div class="product-meta">Marca: ${product.category.description}</div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="d-flex align-items-center gap-2">
                                <label class="quantity-label" for="cantidad">Cantidad</label>
                                <input
                                    type="number"
                                    id="cantidad"
                                    name="cantidad"
                                    value=${quantity}
                                    min="1"
                                    class="quantity-input"
                                />
                            </div>
                        </div>
                        <div class="col-2 text-end">
                            <span class="fw-bold">${product.price.toFixed(2)} €</span>
                        </div>
                        <div class="col-1 text-center">
                            <button class="btn btn-link text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                `;
            })
        );

        return `
            <div class="container py-4">
                <div class="row">
                    <div class="col-12 text-center mb-4">
                        <h2>Esta es tu cesta de la compra</h2>
                    </div>
                </div>

                <div class="row">
                    <!-- Cart Items -->
                    <div class="col-md-8">
                        <div class="mb-3">
                            <span class="fw-bold">${this.cart.products.length} Artículos:</span>
                        </div>
                        ${cartItemsHtml.join("")}
                    </div>

                    <!-- Order Summary -->
                    <div class="col-md-4">
                        <div class="order-summary">
                            <h5 class="mb-4">Resumen de tu pedido:</h5>
                            <div class="d-flex justify-content-between mb-2">
                                <span>SUBTOTAL</span>
                                <span>48,85 €</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="fw-bold">TOTAL:</span>
                                <span class="fw-bold">48,85 €</span>
                            </div>
                            <div class="text-muted small mb-4">(Envío no incluido)</div>

                            <button class="button-submit mb-3">Realizar pedido</button>

                            <div class="text-center">
                                <a href="#" class="text-decoration-none">¿Quieres añadir más productos?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
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
}
