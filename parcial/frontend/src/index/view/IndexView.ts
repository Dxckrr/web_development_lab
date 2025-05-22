import Products from "../../products/Products.js"
import Navbar from "../../navbar/Navbar.js"
import Cart from "../../cart/Cart.js";
import Filter from "../../filter/Filter.js";
import Login from "../../auth/login/Login.js";

export default class IndexView {
  private readonly main: HTMLElement;
  private readonly navbar: Navbar;
  private readonly products: Products;
  private readonly cart: Cart;
  private readonly filter: Filter;
  private readonly login: Login;
  constructor() {
    const main = document.querySelector('main-container') as HTMLElement
    if (!main) {
      this.main = document.createElement('main-container')
    }
    this.main = main

    this.products = new Products('products');
    this.filter = new Filter('filter', (min: number, max: number) => this.products.filterProducts(min, max))
    this.cart = new Cart('cart');
    this.navbar = new Navbar('navbar', async () => await this.cart.renderCartDropDownHTML());
    this.login = new Login('login');
  }

  readonly init = () => {
    console.log('IndexView initialized')
    this.createAuth();
    this.createProducts();
    this.createCart();
    this.createFilter();
    this.createNavbar();
  }

  readonly createNavbar = () => {
    this.navbar.init();
    const navbarHTML = this.navbar.getNavbarHTML();
    const div = document.querySelector("header") as HTMLElement;
    div.appendChild(navbarHTML);
    this.assembleSearchbar();
    const loginModal = this.login.getLoginHTML()
    this.navbar.setloginModal(loginModal)

    // const registerModal = this.register.getRegisterHTML()
    // this.navbar.setregisterModal(registerModal)
  }
  readonly assembleSearchbar = () => {
    setTimeout(() => {
      const input = document.getElementById('searchInput') as HTMLInputElement;
      const searchBtn = document.getElementById('searchBtn') as HTMLElement;
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.products.searchProducts(input.value);
        }
      });

      searchBtn.addEventListener('click', () => {
        this.products.searchProducts(input.value);
      });
    }, 1)

  }

  readonly createProducts = () => {
    this.products.init()
    const productsHTML = this.products.getProductsHTML();
    const mainDiv = document.querySelector("main") as HTMLElement;
    mainDiv.appendChild(productsHTML);
  }

  readonly createCart = () => {
    this.cart.init();
    setTimeout(() => {
      const goToCartBtn = document.getElementById('go-to-cart-btn') as HTMLElement;
      goToCartBtn.addEventListener('click', () => {
        this.renderCart();
        const cartDropdown = document.getElementById("dropdown-cart-menu") as HTMLElement;
        cartDropdown.classList.add("hidden");
      });
    }, 1)
  }

  readonly renderCart = () => {
    const cartHTML = this.cart.getCartHTML();
    const productsHTML = this.products.getProductsHTML();
    const filterHTML = this.filter.getFilterHTML();
    const mainDiv = document.querySelector("main") as HTMLElement;
    mainDiv.removeChild(productsHTML);
    mainDiv.removeChild(filterHTML);
    mainDiv.appendChild(cartHTML);
    this.main.innerHTML = "";
    this.main.appendChild(this.cart.getCartHTML())
  }
  readonly createAuth = () => {
    this.login.init();
  }
  readonly createFilter = () => {
    this.filter.init()
    const filterHTML = this.filter.getFilterHTML()
    const div = document.querySelector('main') as HTMLElement
    console.log(div)
    div.appendChild(filterHTML)
  }
  readonly getIndexHTML = (): HTMLElement => {
    return this.main;
  }
  readonly render = () => {

  }
}
