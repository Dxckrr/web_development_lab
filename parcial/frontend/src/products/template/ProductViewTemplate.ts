import Product from '../types/product/Product.js';

export default class ProductsTemplate {
  constructor() {}
  readonly renderProductModal = async (product: Product): Promise<string> => {
    return `
        <div id="productViewModal" class="modal-overlay">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="product-modal-content">
                    <div id="closeModal"></div>
                    <!-- Product card modal -->
                    <div class="row product-view gap-4 flex-wrap justify-content-center">
                        <div class="col col-5 card border-0">
                            <img src="${await this.getImage(product.id + ".jpg")}" class="img-fluid">
                        </div>
                        <div class="col info text-muted">
                            <section>
                                <div class="d-flex justify-content-between">
                                    <h2 class="modal-title">${product.name}</h2>
                                    <div class="like-button hover-content fs-5 mt-2">
                                        <i class="bi-heart-fill"></i>
                                    </div>
                                </div>
                                <h4 class="text-secondary">${product.units}</h4>
                                <h3>${this.formatToMoney(product.price)}</h3>
                                <p>Sale a: 0,26 €/ud</p>
                            </section>
                            <section class="pb-3">
                                <p>${this.formatDescToP(product.description)}</p>
                            </section>
                            <section class="d-flex justify-content-between align-items-center">
                                <div>
                                    <input type="number" class="form-control text-center" id="numberInput" min="1" max="100" step="1" value="1">
                                </div>
                                <div class="d-grid w-50 ps-5">
                                    <a href="#" class="product-cart-button hover-content">
                                        <i class="bi bi-cart-fill me-1"></i>Añadir a la cesta
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
  }

  private readonly formatDescToP = (text: string): string => {
    return text
        .split(/\n+/)
        .filter(paragraph => paragraph.length > 0)
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
  }
  


  private readonly getImage = async (image: string): Promise<string> => {
    const path = `./img/products/`
    const imagePath = `${path}${image}`
    const response = await fetch(imagePath)
    if (response.ok) {
      return imagePath
    }
    return `${path}not-icon.png`
  }

  private readonly formatToMoney = (value: number): string => {
    const formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    })
    return formatter.format(value)
  }
}
