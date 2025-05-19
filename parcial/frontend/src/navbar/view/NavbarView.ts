import NavbarTemplate from "../template/NavbarTemplate.js";

export default class NavbarView {
    private readonly navbarHTML: HTMLElement;

    constructor(element: string) {
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

    readonly render = (): void => {
        const navTemplate = new NavbarTemplate();
        this.navbarHTML.innerHTML = navTemplate.renderNavbar();
    }

}