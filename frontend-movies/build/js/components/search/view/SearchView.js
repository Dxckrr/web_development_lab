import Observer from '../../shared/types/Observer.js';
export default class SearchView extends Observer {
    moviesHTML;
    constructor(moviesModel) {
        super(moviesModel);
        this.moviesHTML = document.createElement('movies');
        this.moviesHTML.classList.add('movies');
    }
    init = () => {
        console.log('MoviesView initialized');
    };
}
