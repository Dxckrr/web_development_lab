import SearchbarTemplate from "../template/SearchbarTemplate.js";
export default class SearchbarView {
    searchMoviesFn;
    searchbarHTML;
    constructor(element, searchMoviesFn) {
        this.searchMoviesFn = searchMoviesFn;
        const searchbar = document.createElement(`${element}`);
        this.searchbarHTML = searchbar;
    }
    init = () => {
        console.log('SearchbarView initialized');
        this.searchbarHTML.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.searchMovies();
        });
        this.render();
    };
    update = () => {
        console.log("Searchbar View updated");
        this.render();
    };
    render = async () => {
        const template = new SearchbarTemplate();
        const searchData = '';
        this.searchbarHTML.innerHTML = await template.renderSearchbar(searchData);
    };
    searchMovies = async () => {
        const input = this.searchbarHTML.querySelector('input');
        const search = input.value;
        await this.searchMoviesFn(search);
        input.value = '';
        this.render();
    };
    getSearchbarHTML = () => {
        return this.searchbarHTML;
    };
}
