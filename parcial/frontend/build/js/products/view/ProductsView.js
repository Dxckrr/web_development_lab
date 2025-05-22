import Observer from '../../shared/types/Observer.js';
import ProductsTemplate from '../template/ProductsTemplate.js';
import ProductViewTemplate from '../template/ProductViewTemplate.js';
export default class ProductsView extends Observer {
    container;
    productsHTML;
    modalHTML;
    // private readonly paginationHTML: HTMLElement;
    constructor(moviesModel, element) {
        super(moviesModel);
        this.container = document.createElement(element);
        this.productsHTML = document.createElement('productsData');
        this.modalHTML = document.createElement('productModalView');
        // this.paginationHTML = document.createElement('pagination') as HTMLElement
    }
    init = () => {
        console.log('ProductsView initialized');
    };
    update = () => {
        this.render();
    };
    render = async () => {
        const moviesModel = this.subject;
        const productsData = moviesModel.getProductsData();
        const template = new ProductsTemplate(productsData);
        // const modal = template.renderProductModal()
        this.productsHTML.innerHTML = await template.renderProductsCards();
        this.assingnModalEvent(productsData);
        // const buttons = template.renderPageButton(moviesModel.getCurrentPage(), moviesModel.getTotalPages());
        // this.paginationHTML.innerHTML = buttons;
        // this.assignPaginationEvent(moviesModel);
    };
    getMoviesHTML = () => {
        this.container.innerHTML = '';
        this.container.appendChild(this.modalHTML);
        this.container.appendChild(this.productsHTML);
        // this.container.appendChild(this.paginationHTML);
        return this.container;
    };
    assingnModalEvent = async (products) => {
        const template = new ProductViewTemplate();
        products.map((product) => {
            const openModal = document.getElementById(`view-product-${product.id}`);
            openModal.addEventListener("click", async (e) => {
                e.preventDefault();
                this.modalHTML.innerHTML = await template.renderProductModal(product);
                const modal = document.getElementById('productViewModal');
                modal.classList.add("active");
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        modal.classList.remove('active');
                    }
                });
            });
        });
    };
}
