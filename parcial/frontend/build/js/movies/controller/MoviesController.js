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
    };
    searchMovies = async (search) => {
        if (search.length > 3 || search.length === 0) {
            return this.model.searchMovies(search);
        }
    };
}
