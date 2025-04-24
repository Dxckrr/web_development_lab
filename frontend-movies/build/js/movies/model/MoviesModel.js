import Subject from "../../shared/types/Subject.js";
import NullMovie from "../types/NullMovie.js";
export default class MoviesModel extends Subject {
    moviesData = [];
    filteredMovies = [];
    gridSize = 16;
    currentPage = 1;
    constructor() {
        super();
        this.moviesData = [NullMovie];
        this.filteredMovies = [NullMovie];
    }
    init = async () => {
        this.moviesData = await this.loadMoviesData();
        this.filteredMovies = this.moviesData;
    };
    getMoviesData = () => {
        const start = (this.currentPage - 1) * this.gridSize;
        const end = this.currentPage * this.gridSize;
        return this.filteredMovies.slice(start, end);
    };
    loadMoviesData = async () => {
        const res = await fetch('./database/movies-2020s.json');
        if (!res.ok) {
            return [NullMovie];
        }
        return await res.json();
    };
    searchMovies = async (search) => {
        if (search.length === 0) {
            this.filteredMovies = this.moviesData;
        }
        else {
            const searchLower = search.toLowerCase();
            this.filteredMovies = this.moviesData.filter((movie) => {
                const title = movie.title?.toLowerCase() || "";
                const year = movie.year?.toString() || "";
                const price = movie.price?.toString() || "";
                const extract = movie.extract?.toLowerCase() || "";
                const cast = Array.isArray(movie.cast) ? movie.cast.join(", ").toLowerCase() : "";
                const genres = Array.isArray(movie.genres) ? movie.genres.join(", ").toLowerCase() : "";
                const aws = [title, year, price, extract, cast, genres].join(" ");
                return aws.includes(searchLower);
            });
        }
        this.notifyALL();
    };
    getSizeGrid = () => {
        const size = this.filteredMovies.length;
        if (size === 0)
            return 0;
        const total = Math.ceil(size / this.gridSize);
        return total;
    };
    nextPage = () => {
        const totalPages = this.getSizeGrid();
        if (this.currentPage < totalPages) {
            this.setPage(this.currentPage + 1);
        }
    };
    previousPage = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
    };
    setPage = (page) => {
        this.currentPage = page;
        this.notifyALL();
    };
    getCurrentPage = () => {
        return this.currentPage;
    };
}
