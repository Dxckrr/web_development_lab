import Observer from '../../shared/types/Observer.js'
import ProductsModel from '../model/ProductsModel.js'
import ProductsTemplate from '../template/ProductsTemplate.js'
import Product from '../types/product/Product.js';

export default class ProductsView extends Observer<ProductsModel> {
  private readonly container: HTMLElement;
  private readonly productsHTML: HTMLElement;
  // private readonly modalHTML: HTMLElement;
  // private readonly paginationHTML: HTMLElement;

  constructor(moviesModel: ProductsModel, element: string) {
    super(moviesModel);
    this.container = document.createElement(element) as HTMLElement;
    this.productsHTML = document.createElement('productsData') as HTMLElement;
    // this.modalHTML = document.createElement('productModalView')
    // this.paginationHTML = document.createElement('pagination') as HTMLElement
  }

  readonly init = (): void => {
    console.log('ProductsView initialized')
  }

  readonly update = (): void => {
    this.render()
  }

  readonly render = async (): Promise<void> => {
    const moviesModel = (this.subject as ProductsModel);
    const productsData = moviesModel.getProductsData();
    
    const template = new ProductsTemplate(productsData);
    // const modal = template.renderProductModal()
    this.productsHTML.innerHTML = await template.renderProductsCards();
    this.assingnModalEvent(productsData);
    // const buttons = template.renderPageButton(moviesModel.getCurrentPage(), moviesModel.getTotalPages());
    // this.paginationHTML.innerHTML = buttons;
    // this.assignPaginationEvent(moviesModel);
  }

  readonly getMoviesHTML = (): HTMLElement => {
    this.container.innerHTML = '';
    this.container.appendChild(this.productsHTML);
    // this.container.appendChild(this.paginationHTML);
    return this.container;
  }

  private readonly assingnModalEvent = (_products: Product[]) => {
    let btn = document.getElementById("view-product") as HTMLElement
    btn.addEventListener("click", () => {
      
    })
  }

  // private readonly assignPaginationEvent = (modelMovie: ProductsModel) => {
  //   const nextButton = document.querySelector('#next-button');
  //   const prevButton = document.querySelector('#prev-button');
    
  //   prevButton?.addEventListener('click', () => {
  //     modelMovie.previousPage();
  //   })
  //   nextButton?.addEventListener('click', () => {
  //     modelMovie.nextPage();
  //   })
  // }
}
