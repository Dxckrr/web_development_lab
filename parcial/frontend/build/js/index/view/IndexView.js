import Products from "../../products/Products.js";
import Navbar from "../../navbar/Navbar.js";
// import Searchbar from "../../searchbar/Searchbar.js";
export default class IndexView {
    main;
    navbar;
    products;
    // private readonly searchbar: Searchbar;
    constructor() {
        const main = document.querySelector('main');
        if (!main) {
            this.main = document.createElement('main');
        }
        this.main = main;
        this.navbar = new Navbar('navbar');
        this.products = new Products('products');
        // this.searchbar = new Searchbar('searchbar', async (search: string) => await this.products.searchMovies(search))
    }
    init = () => {
        console.log('IndexView initialized');
        this.createNavbar();
        this.createProducts();
        // this.createSearchbar();
    };
    createNavbar = () => {
        this.navbar.init();
        const navbarHTML = this.navbar.getNavbarHTML();
        const div = document.querySelector("header");
        div.appendChild(navbarHTML);
    };
    // readonly createSearchbar = () => {
    //   this.searchbar.init();
    //   const searchbarHTML = this.searchbar.getSearchbatHTML();
    //   const div = document.querySelector('.nav-btn-right') as HTMLElement;
    //   div.appendChild(searchbarHTML);
    // }
    createProducts = () => {
        this.products.init();
        const productsHTML = this.products.getProductsHTML();
        const mainDiv = document.querySelector("main");
        mainDiv.appendChild(productsHTML);
    };
    getIndexHTML = () => {
        return this.main;
    };
    render = () => { };
}
