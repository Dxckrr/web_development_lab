export default class SearchbarController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = () => {
        console.log('SearchbarController initialized');
        this.model.init();
        this.view.init();
    };
}
