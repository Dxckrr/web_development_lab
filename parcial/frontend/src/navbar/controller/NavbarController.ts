import NavbarModel from "../model/NavbarModel";
import NavbarView from "../view/NavbarView";

export default class NavbarController {
    constructor(
        private readonly model: NavbarModel,
        private readonly view: NavbarView
    ) {}

    readonly init = () => {
        this.model.init();
        this.view.init();
        console.log("NavbarController initialized");
    }
}