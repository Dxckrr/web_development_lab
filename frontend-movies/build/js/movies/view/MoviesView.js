import Observer from "../../shared/types/Observer.js";
import MoviesTemplate from "../template/MoviesTemplate.js";
export default class MoviesView extends Observer {
    moviesHTML;
    searchItem;
    paginator;
    constructor(moviesModel) {
        super(moviesModel);
        this.moviesHTML = document.createElement("movies");
        this.paginator = document.createElement(`paginator`);
        this.moviesHTML.classList.add("movies");
        this.searchItem = document.getElementById("search");
    }
    init = () => {
        console.log("MoviesView initialized");
    };
    update = () => {
        this.render();
    };
    getPaginatorHTML = () => {
        return this.paginator;
    };
    render = async () => {
        const movieModel = this.subject;
        const moviesData = this.subject.getMoviesData();
        const template = new MoviesTemplate(moviesData);
        const gridMovies = await template.get();
        this.moviesHTML.innerHTML = gridMovies;
        const button = await template.renderPaginationButtons(movieModel.getCurrentPage(), movieModel.getSizeGrid());
        this.paginator.innerHTML = button;
        this.assingEvent(movieModel);
    };
    assingEvent = (modelMovie) => {
        const prevBtn = document.querySelector('#prev-button');
        const nextBtn = document.querySelector('#next-button');
        prevBtn?.addEventListener('click', () => {
            modelMovie.previousPage();
        });
        nextBtn?.addEventListener('click', () => {
            modelMovie.nextPage();
        });
    };
    getMoviesHTML = () => {
        return this.moviesHTML;
    };
    getSearchForm = () => {
        return this.searchItem;
    };
    getSearchValue = () => {
        const form = this.getSearchForm();
        const input = form.elements.namedItem("searchValue");
        return input.value;
    };
}
