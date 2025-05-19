import NavbarTemplate from "../template/NavbarTemplate.js";
export default class NavbarView {
    navbarHTML;
    constructor(element) {
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
    render = () => {
        const navTemplate = new NavbarTemplate();
        this.navbarHTML.innerHTML = navTemplate.renderNavbar();
    };
}
