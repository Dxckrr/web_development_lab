import Observer from '../../shared/types/Observer.js';
import MoviesTemplate from '../template/MoviesTemplate.js';
export default class MoviesView extends Observer {
    container;
    moviesHTML;
    paginationHTML;
    constructor(moviesModel, element) {
        super(moviesModel);
        this.container = document.createElement(element);
        this.moviesHTML = document.createElement('moviesData');
        this.moviesHTML.classList.add('movies');
        this.paginationHTML = document.createElement('pagination');
    }
    init = () => {
        console.log('MoviesView initialized');
    };
    update = () => {
        this.render();
    };
    render = async () => {
        const moviesModel = this.subject;
        const moviesData = moviesModel.getMoviesData();
        const template = new MoviesTemplate(moviesData);
        this.moviesHTML.innerHTML = await template.render();
        const buttons = template.renderPageButton(moviesModel.getCurrentPage(), moviesModel.getTotalPages());
        this.paginationHTML.innerHTML = buttons;
        this.assignPaginationEvent(moviesModel);
    };
    getMoviesHTML = () => {
        this.container.innerHTML = '';
        this.container.appendChild(this.moviesHTML);
        this.container.appendChild(this.paginationHTML);
        return this.container;
    };
    assignPaginationEvent = (modelMovie) => {
        const nextButton = document.querySelector('#next-button');
        const prevButton = document.querySelector('#prev-button');
        prevButton?.addEventListener('click', () => {
            modelMovie.previousPage();
        });
        nextButton?.addEventListener('click', () => {
            modelMovie.nextPage();
        });
    };
}
