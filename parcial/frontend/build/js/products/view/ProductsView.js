import Observer from '../../shared/types/Observer.js';
import ProductsTemplate from '../template/ProductsTemplate.js';
export default class ProductsView extends Observer {
    container;
    productsHTML;
    // private readonly modalHTML: HTMLElement;
    // private readonly paginationHTML: HTMLElement;
    constructor(moviesModel, element) {
        super(moviesModel);
        this.container = document.createElement(element);
        this.productsHTML = document.createElement('productsData');
        // this.modalHTML = document.createElement('productModalView')
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
        this.container.appendChild(this.productsHTML);
        // this.container.appendChild(this.paginationHTML);
        return this.container;
    };
    assingnModalEvent = (_products) => {
        let btn = document.getElementById("view-product");
        btn.addEventListener("click", () => {
        });
    };
}
