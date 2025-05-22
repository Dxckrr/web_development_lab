export default class ProductsController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        console.log('ProductController initialized');
        this.view.init();
        await this.model.init();
    };
}
