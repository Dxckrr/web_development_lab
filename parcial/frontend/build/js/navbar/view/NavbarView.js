import NavbarTemplate from "../template/NavbarTemplate.js";
export default class NavbarView {
    renderCartDropdown;
    navbarHTML;
    loginElement = null;
    registerElement = null;
    constructor(element, renderCartDropdown) {
        this.renderCartDropdown = renderCartDropdown;
        const navbar = document.createElement(`${element}`);
        this.navbarHTML = navbar;
    }
    init = () => {
        this.render();
        console.log("NavbarView initialized");
    };
    getNavbarHTML = () => {
        return this.navbarHTML;
    };
    render = async () => {
        const navTemplate = new NavbarTemplate();
        this.navbarHTML.innerHTML = await navTemplate.renderNavbar();
        this.assingnDropdownEvent();
        this.assignAuthEvents();
    };
    assingnDropdownEvent = () => {
        const openCart = document.getElementById("cart-dropdown-btn");
        const cartDropdownMenu = document.getElementById("dropdown-cart-menu");
        openCart.addEventListener("click", async (e) => {
            e.preventDefault();
            const dropdownContent = document.getElementById("cart-dd-content");
            dropdownContent.innerHTML = await this.renderCartDropdown();
            cartDropdownMenu.classList.toggle("hidden");
            const closeCartDropdown = document.getElementById("close-cart-dropdown");
            closeCartDropdown.addEventListener("click", async (e) => {
                e.preventDefault();
                cartDropdownMenu.classList.add("hidden");
            });
        });
        window.addEventListener('click', (e) => {
            if (!openCart.contains(e.target) && !cartDropdownMenu.contains(e.target)) {
                cartDropdownMenu.classList.add("hidden");
            }
        });
    };
    assignAuthEvents = () => {
        const loginLink = this.navbarHTML.querySelector('#login');
        if (loginLink) {
            loginLink.addEventListener('click', (e) => {
                console.log('Login link clicked');
                e.preventDefault();
                e.stopPropagation();
                this.showLogin();
            });
        }
        const registerLink = this.navbarHTML.querySelector('#register');
        if (registerLink) {
            registerLink.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showRegister();
            });
        }
    };
    setLoginElement = (element) => {
        this.loginElement = element;
    };
    setRegisterElement = (element) => {
        this.registerElement = element;
    };
    showLogin = () => {
        if (this.loginElement) {
            document.body.appendChild(this.loginElement);
            this.loginElement.style.display = 'block';
            document.getElementById('modalLogin')?.classList.add('active');
        }
    };
    showRegister = () => {
        if (this.registerElement) {
            document.body.appendChild(this.registerElement);
            this.registerElement.style.display = 'block';
            document.getElementById('modalRegister')?.classList.add('active');
            const accountDropdown = this.navbarHTML.querySelector('.account-dropdown');
            if (accountDropdown) {
                accountDropdown.classList.remove('active');
            }
        }
    };
}
