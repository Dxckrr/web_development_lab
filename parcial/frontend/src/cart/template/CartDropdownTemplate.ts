
export default class CartDropdownTemplate {
    constructor() {}

    readonly renderCartDropdownContent = async (): Promise<string> => {
        return `
        <div id="cart-dd-content">
            <div class="d-flex justify-content-between align-items-center head-modal">
                <span class="fw-bold color-green">MI CARRITO (3)</span>
                <i class="bi bi-x fs-2 close-btn" onclick="bootstrap.Dropdown.getInstance(document.querySelector('#carritoBtn')).hide()"></i>
            </div>
            
            <div class="cart-items-scroll" id="products-cart-dropdown">
                <!-- Producto 1 -->
                <div class="product-item">
                    <img src="https://gotoskincare.com/cdn/shop/articles/0723_GT_Blog_MeccaImage.jpg?v=1688608892&width=1024" class="product-img" alt="Producto 1">
                    <div class="flex-grow-1 d-flex flex-column">
                        <div class="d-flex flex-row">
                            <div>
                                <div class="fw-bold small">ACEITE CORPORAL DE ALMENDRAS DULCES</div>
                                <div class="text-muted small">500ML</div>
                            </div>
                            <i class="bi bi-x fs-4" style="line-height: 0;"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-end">
                                <span class="me-2 small text-muted">Cantidad:</span>
                                <input type="number" class="form-control text-center" id="numberInput" min="1" max="100" step="1" value="1">
                            </div>
                            <div class="text-end small price">
                                <p class="m-0 text-nowrap">10,45 €</p>
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-content-between">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Totales -->
            <div id="total-cart-dropdown">
                <div class="d-flex justify-content-between small subtotal">
                    <span class="text-muted">Subtotal</span>
                    <span class="text-muted">38,40 €</span>
                </div>
                <div class="d-flex justify-content-between fw-bold total">
                    <span>TOTAL <span>(IVA incluido)</span></span>
                    <span>38,40 €</span>
                </div>
                <div class="small mt-1 color-green">Te faltan 6,60 € para disfrutar del envío gratuito.</div>
            </div>

        </div>
        `
    }
}