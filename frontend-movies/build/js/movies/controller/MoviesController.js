export default class MoviesController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        console.log('MoviesController initialized');
        this.view.init();
        await this.model.init();
        this.searchMovies();
    };
    searchMovies = () => {
        const form = this.view.getSearchForm();
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const value = this.view.getSearchValue();
            this.model.searchMovies(value);
            this.view.update();
        });
    };
}
