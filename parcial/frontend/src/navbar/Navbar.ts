import NavbarController from "./controller/NavbarController.js";
import NavbarModel from "./model/NavbarModel.js";
import NavbarView from "./view/NavbarView.js";

export default class Navbar {
    private readonly model: NavbarModel;
    private readonly view: NavbarView;
    private readonly controller: NavbarController;

    constructor(element: string, readonly renderCartDropdown: () => Promise<string>) {
        this.model = new NavbarModel();
        this.view = new NavbarView(element, renderCartDropdown);
        this.controller = new NavbarController(this.model, this.view);
    }

    readonly init = () => {
        this.controller.init();
    }

    readonly getNavbarHTML = (): HTMLElement => {
        return this.view.getNavbarHTML();
    }
}