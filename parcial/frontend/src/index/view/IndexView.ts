import Products from "../../products/Products.js"
import Navbar from "../../navbar/Navbar.js"
// import Searchbar from "../../searchbar/Searchbar.js";

export default class IndexView {
  private readonly main: HTMLElement;
  private readonly navbar: Navbar;
  private readonly products: Products;
  // private readonly searchbar: Searchbar;

  constructor() {
    const main = document.querySelector('main') as HTMLElement
    if (!main) {
      this.main = document.createElement('main')
    }
    this.main = main

    this.navbar = new Navbar('navbar');
    this.products = new Products('products');
    // this.searchbar = new Searchbar('searchbar', async (search: string) => await this.products.searchMovies(search))
  }

  readonly init = () => {
    console.log('IndexView initialized')
    this.createNavbar();
    this.createProducts();
    // this.createSearchbar();
  }

  readonly createNavbar = () => {
    this.navbar.init();
    const navbarHTML = this.navbar.getNavbarHTML();
    const div = document.querySelector("header") as HTMLElement;
    div.appendChild(navbarHTML);
  }

  // readonly createSearchbar = () => {
  //   this.searchbar.init();
  //   const searchbarHTML = this.searchbar.getSearchbatHTML();
  //   const div = document.querySelector('.nav-btn-right') as HTMLElement;
  //   div.appendChild(searchbarHTML);
  // }

  readonly createProducts = () => {
    this.products.init()
    const productsHTML = this.products.getProductsHTML();
    const mainDiv = document.querySelector("main") as HTMLElement;
    mainDiv.appendChild(productsHTML);
  }

  readonly getIndexHTML = (): HTMLElement => {
    return this.main;
  }

  readonly render = () => {}
}
