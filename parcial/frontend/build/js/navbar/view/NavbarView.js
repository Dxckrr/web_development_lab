import NavbarTemplate from "../template/NavbarTemplate.js";
export default class NavbarView {
    renderCartDropdown;
    navbarHTML;
    constructor(element, renderCartDropdown) {
        this.renderCartDropdown = renderCartDropdown;
        // const navbar = document.querySelector(".nav-btn-left") as HTMLElement
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
        const goToCartBtn = document.getElementById("go-to-cart-btn");
        goToCartBtn.addEventListener("click", () => {
            console.log("vamonosssssss");
        });
    };
}
