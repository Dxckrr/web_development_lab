import Subject from '../../shared/types/Subject.js';
import NullMovie from '../types/NullMovie.js';
export default class MoviesModel extends Subject {
    moviesData;
    filteredMovies;
    currentPage;
    gridSize;
    constructor() {
        super();
        this.moviesData = [NullMovie];
        this.filteredMovies = [NullMovie];
        this.currentPage = 1;
        this.gridSize = 16;
    }
    init = async () => {
        console.log('MoviesModel initialized');
        this.moviesData = await this.loadData();
        this.filteredMovies = this.moviesData;
        this.notifyALL();
    };
    getMoviesData = () => {
        return this.filteredMovies.slice((this.currentPage - 1) * this.gridSize, //
        this.currentPage * this.gridSize //
        );
    };
    loadData = async () => {
        const response = await fetch('./database/movies-2020s.json');
        if (!response.ok) {
            return [NullMovie];
        }
        return await response.json();
    };
    searchMovies = async (searchData) => {
        if (searchData.length === 0) {
            this.filteredMovies = this.moviesData;
        }
        const search = searchData.toLowerCase();
        this.filteredMovies = this.moviesData.filter((movie) => {
            const title = movie.title?.toLowerCase() || "";
            const year = movie.year?.toString() || "";
            const price = movie.price?.toString() || "";
            const extract = movie.extract?.toLowerCase() || "";
            const cast = Array.isArray(movie.cast) ? movie.cast.join(", ").toLowerCase() : "";
            const genres = Array.isArray(movie.genres) ? movie.genres.join(", ").toLowerCase() : "";
            const mvData = [title, year, price, extract, cast, genres].join(" ");
            return mvData.includes(search);
        });
        this.currentPage = 1;
        this.notifyALL();
    };
    // Pages functions
    getTotalPages = () => {
        const size = this.filteredMovies.length;
        return Math.ceil(size / this.gridSize);
    };
    nextPage = () => {
        if (this.currentPage < this.getTotalPages()) {
            this.setPage(this.currentPage + 1);
        }
        else if (this.currentPage === this.getTotalPages()) {
            this.setPage(1);
        }
    };
    previousPage = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
        else if (this.currentPage === 1) {
            this.setPage(this.getTotalPages());
        }
    };
    setPage = (n) => {
        this.currentPage = n;
        this.notifyALL();
    };
    getCurrentPage = () => this.currentPage;
}
