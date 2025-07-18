export default class NavbarController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = () => {
        this.model.init();
        this.view.init();
        console.log("NavbarController initialized");
    };
    setloginModalHTML = (html) => {
        this.view.setLoginElement(html);
    };
    setregisterModalHTML = (html) => {
        this.view.setRegisterElement(html);
    };
}
