import Products from "../../products/Products.js";
import Navbar from "../../navbar/Navbar.js";
import Cart from "../../cart/Cart.js";
import Filter from "../../filter/Filter.js";
export default class IndexView {
    main;
    navbar;
    products;
    cart;
    filter;
    constructor() {
        const main = document.querySelector('main-container');
        if (!main) {
            this.main = document.createElement('main-container');
        }
        this.main = main;
        this.products = new Products('products');
        this.filter = new Filter('filter', (min, max) => this.products.filterProducts(min, max));
        this.cart = new Cart('cart');
        this.navbar = new Navbar('navbar', async () => await this.cart.renderCartDropDownHTML());
        // this.searchbar = new Searchbar('searchbar', async (search: string) => await this.products.searchMovies(search))
    }
    init = () => {
        console.log('IndexView initialized');
        this.createNavbar();
        this.createProducts();
        this.createCart();
        this.createFilter();
        // this.createSearchbar();
    };
    createNavbar = () => {
        this.navbar.init();
        const navbarHTML = this.navbar.getNavbarHTML();
        const div = document.querySelector("header");
        div.appendChild(navbarHTML);
        //
        // const cartButton = document.getElementById('cart') as HTMLElement;
        // cartButton.addEventListener('click', () => {
        //   this.renderCart();
        // });
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
    createCart = () => {
        this.cart.init();
    };
    getIndexHTML = () => {
        return this.main;
    };
    renderCart = () => {
        const cartHTML = this.cart.getCartHTML();
        const productsHTML = this.products.getProductsHTML();
        const mainDiv = document.querySelector(".main");
        mainDiv.removeChild(productsHTML);
        mainDiv.appendChild(cartHTML);
    };
    createFilter = () => {
        this.filter.init();
        const filterHTML = this.filter.getFilterHTML();
        const div = document.querySelector('main');
        console.log(div);
        div.appendChild(filterHTML);
    };
    render = () => {
    };
}
