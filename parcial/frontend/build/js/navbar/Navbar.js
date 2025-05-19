import NavbarController from "./controller/NavbarController.js";
import NavbarModel from "./model/NavbarModel.js";
import NavbarView from "./view/NavbarView.js";
export default class Navbar {
    model;
    view;
    controller;
    constructor(element) {
        this.model = new NavbarModel();
        this.view = new NavbarView(element);
        this.controller = new NavbarController(this.model, this.view);
    }
    init = () => {
        this.controller.init();
    };
    getNavbarHTML = () => {
        return this.view.getNavbarHTML();
    };
}
