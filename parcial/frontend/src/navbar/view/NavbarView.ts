import NavbarTemplate from "../template/NavbarTemplate.js";

export default class NavbarView {
    private readonly navbarHTML: HTMLElement;

    constructor(element: string, readonly renderCartDropdown: () => Promise<string>) {
        // const navbar = document.querySelector(".nav-btn-left") as HTMLElement
        const navbar = document.createElement(`${element}`);
        this.navbarHTML = navbar;
    }

    readonly init = (): void => {
        this.render();
        console.log("NavbarView initialized");
    }

    readonly getNavbarHTML = (): HTMLElement => {
        return this.navbarHTML;
    }

    readonly render = async () => {
        const navTemplate = new NavbarTemplate();
        this.navbarHTML.innerHTML = await navTemplate.renderNavbar();
        this.assingnDropdownEvent();
    }

    private readonly assingnDropdownEvent = () => {
        const openCart = document.getElementById("cart-dropdown-btn") as HTMLElement
        const cartDropdownMenu = document.getElementById("dropdown-cart-menu") as HTMLElement
        openCart.addEventListener("click", async (e: MouseEvent) => {
            e.preventDefault();
            const dropdownContent = document.getElementById("cart-dd-content") as HTMLElement

            dropdownContent.innerHTML = await this.renderCartDropdown();
            cartDropdownMenu.classList.toggle("hidden")
            const closeCartDropdown = document.getElementById("close-cart-dropdown") as HTMLElement
            closeCartDropdown.addEventListener("click", async (e: MouseEvent) => {
                e.preventDefault();
                cartDropdownMenu.classList.add("hidden")
            })
        })
        window.addEventListener('click', (e: MouseEvent) => {
            if (!openCart.contains(e.target as Node) && !cartDropdownMenu.contains(e.target as Node)) {
                cartDropdownMenu.classList.add("hidden");
            }
        });
        const goToCartBtn = document.getElementById("go-to-cart-btn") as HTMLElement;
        goToCartBtn.addEventListener("click", () => {
            console.log("vamonosssssss");
        })
    }

}