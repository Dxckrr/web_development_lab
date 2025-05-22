import Product from '../types/product/Product.js';

export default class ProductsTemplate {
  constructor(private readonly products: Product[]) {}

  readonly renderProductsCards = async (): Promise<string> => {
    let html = "<div class='product-container'> <div class='row row-cols-2 row-cols-sm-3 row-cols-md-4 mb-3'>"
    const productsTemplate = Promise.all(this.products.map(async (product: Product) => {
      return `
        <article class="col justify-content-center product-card-container">
          <div class="product-card card text-center border-0 card-inner">
            <div class="like-button hover-content">
              <i class="bi-heart-fill"></i>
            </div>
            <!-- <div class="discount">
              <p>- 50%<br>2°und.</p>
            </div> -->
            <a href="" class="text-decoration-none" id="view-product-${product.id}">
              <img class="w-100" src="${await this.getImage(product.id + ".jpg")}">
              <h5 class="title">${product.name}</h5>
            </a>
            <p class="units">${product.units}</p>
            <p class="brand">${product.brand}</p>
            <p class="price">${this.formatToMoney(product.price)}</p>

            <div>
              <a href="#" class="product-cart-button hover-content">
                <i class="bi bi-cart-fill me-1"></i>Añadir a la cesta
              </a>
            </div>
          </div>
        </article>
        `
      })
    )
    html += (await productsTemplate).join('') + "</div>" + "</div>"
    return html;
  }

  readonly renderProductModal = async (product: Product): Promise<string> => {
    
    return `
      <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content p-4">
              <div class="modal-body p-0">
                <div class="row product-view gap-4 flex-wrap justify-content-center align-items-center">
                  <div class="col col-5 card border-0">
                      <img src="${this.getImage(product.id + ".jpg")}" class="img-fluid">
                  </div>
                  <div class="col info text-muted">
                  <section class="mb-5">
                    <div class="like-button hover-content fs-5 mt-2">
                      <i class="bi-heart-fill"></i>
                    </div>
                    <h2 class="modal-title">${product.name}</h2>
                    <h4 class="text-secondary">${product.units}</h4>
                    <h3>${this.formatToMoney(product.price)}</h3>
                    <p>Sale a: 0,26 €/ud</p>
                  </section>
                  <section class="pb-3">
                    <p>${product.description.replace(/\n/g, '<br>')}</p>
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
      </div>
    `
  }

  readonly renderPageButton = (current: number, max: number) => {
    return `
      <div class="pagination">
        <button id="prev-button"><span>&larr;</span></button>
        <span class="page-info">${current} / ${max}</span>
        <button id="next-button"><span>&rarr;</span></button>
      </div>
    `
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
