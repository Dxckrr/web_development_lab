import NavbarTemplate from "../template/NavbarTemplate.js";

export default class NavbarView {
    private readonly navbarHTML: HTMLElement;
    private loginElement: HTMLElement | null = null
    private registerElement: HTMLElement | null = null

    constructor(element: string, readonly renderCartDropdown: () => Promise<string>) {
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
        this.assignAuthEvents();
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
    }
    private readonly assignAuthEvents = () => {
        const loginLink = this.navbarHTML.querySelector('#login') as HTMLElement;
        if (loginLink) {
            loginLink.addEventListener('click', (e) => {
                console.log('Login link clicked');
                e.preventDefault();
                e.stopPropagation();
                this.showLogin();
            });
        }
        const registerLink = this.navbarHTML.querySelector('#register') as HTMLElement;
        if (registerLink) {
            registerLink.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showRegister();
            });
        }
    }
    readonly setLoginElement = (element: HTMLElement) => {
        this.loginElement = element
    }

    readonly setRegisterElement = (element: HTMLElement) => {
        this.registerElement = element
    }
    private readonly showLogin = () => {
        if (this.loginElement) {
            document.body.appendChild(this.loginElement)
            this.loginElement.style.display = 'block'
            document.getElementById('modalLogin')?.classList.add('active');
        }
    }
    private readonly showRegister = () => {
        if (this.registerElement) {
            document.body.appendChild(this.registerElement)
            this.registerElement.style.display = 'block'
            document.getElementById('modalRegister')?.classList.add('active')

            const accountDropdown = this.navbarHTML.querySelector('.account-dropdown') as HTMLElement;
            if (accountDropdown) {
                accountDropdown.classList.remove('active')
            }
        }
    }

}