import NavbarController from "./controller/NavbarController.js";
import NavbarModel from "./model/NavbarModel.js";
import NavbarView from "./view/NavbarView.js";
export default class Navbar {
    renderCartDropdown;
    model;
    view;
    controller;
    constructor(element, renderCartDropdown) {
        this.renderCartDropdown = renderCartDropdown;
        this.model = new NavbarModel();
        this.view = new NavbarView(element, renderCartDropdown);
        this.controller = new NavbarController(this.model, this.view);
    }
    init = () => {
        this.controller.init();
    };
    getNavbarHTML = () => {
        return this.view.getNavbarHTML();
    };
    setloginModal = (element) => {
        return this.controller.setloginModalHTML(element);
    };
    setregisterModal = (element) => {
        return this.controller.setregisterModalHTML(element);
    };
}
