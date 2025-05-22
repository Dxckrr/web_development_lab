import Products from "../../products/Products.js";
import Navbar from "../../navbar/Navbar.js";
import Cart from "../../cart/Cart.js";
import Filter from "../../filter/Filter.js";
import Login from "../../auth/login/Login.js";
export default class IndexView {
    main;
    navbar;
    products;
    cart;
    filter;
    login;
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
        this.login = new Login('login');
    }
    init = () => {
        console.log('IndexView initialized');
        this.createAuth();
        this.createProducts();
        this.createCart();
        this.createFilter();
        this.createNavbar();
    };
    createNavbar = () => {
        this.navbar.init();
        const navbarHTML = this.navbar.getNavbarHTML();
        const div = document.querySelector("header");
        div.appendChild(navbarHTML);
        this.assembleSearchbar();
        const loginModal = this.login.getLoginHTML();
        this.navbar.setloginModal(loginModal);
        // const registerModal = this.register.getRegisterHTML()
        // this.navbar.setregisterModal(registerModal)
    };
    assembleSearchbar = () => {
        setTimeout(() => {
            const input = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.products.searchProducts(input.value);
                }
            });
            searchBtn.addEventListener('click', () => {
                this.products.searchProducts(input.value);
            });
        }, 1);
    };
    createProducts = () => {
        this.products.init();
        const productsHTML = this.products.getProductsHTML();
        const mainDiv = document.querySelector("main");
        mainDiv.appendChild(productsHTML);
    };
    createCart = () => {
        this.cart.init();
        setTimeout(() => {
            const goToCartBtn = document.getElementById('go-to-cart-btn');
            goToCartBtn.addEventListener('click', () => {
                this.renderCart();
                const cartDropdown = document.getElementById("dropdown-cart-menu");
                cartDropdown.classList.add("hidden");
            });
        }, 1);
    };
    renderCart = () => {
        const cartHTML = this.cart.getCartHTML();
        const productsHTML = this.products.getProductsHTML();
        const filterHTML = this.filter.getFilterHTML();
        const mainDiv = document.querySelector("main");
        mainDiv.removeChild(productsHTML);
        mainDiv.removeChild(filterHTML);
        mainDiv.appendChild(cartHTML);
        this.main.innerHTML = "";
        this.main.appendChild(this.cart.getCartHTML());
    };
    createAuth = () => {
        this.login.init();
    };
    createFilter = () => {
        this.filter.init();
        const filterHTML = this.filter.getFilterHTML();
        const div = document.querySelector('main');
        console.log(div);
        div.appendChild(filterHTML);
    };
    getIndexHTML = () => {
        return this.main;
    };
    render = () => {
    };
}
