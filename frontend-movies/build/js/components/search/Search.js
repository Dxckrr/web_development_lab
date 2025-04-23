export default class Search {
    searchMethod;
    constructor(searchMethod) {
        this.searchMethod = searchMethod;
    }
    init = () => {
        console.log("Search initialized");
    };
    searchMovies = (filter) => {
        this.searchMethod(filter);
    };
}
