import NavbarController from './controller/NavbarController.js';
import NavbarModel from './model/NavbarModel.js';
import NavbarView from './view/NavbarView.js';
export default class Navbar {
    model;
    view;
    controller;
    constructor() {
        this.model = new NavbarModel();
        this.view = new NavbarView();
        this.controller = new NavbarController(this.model, this.view);
    }
    init = () => {
        this.controller.init();
    };
    getNavbarHTML = () => {
        return this.view.getNavbarHTML();
    };
    onSectionChange = (callback) => {
        this.view.onSectionChange(callback);
    };
}
