import Movies from "../../movies/Movies.js";
import Navbar from "../../navbar/Navbar.js";
export default class IndexView {
    main;
    navbar;
    movies;
    constructor() {
        const main = document.querySelector("main");
        if (!main)
            this.main = document.createElement("main");
        this.main = main;
        this.navbar = new Navbar();
        this.movies = new Movies();
    }
    init = () => {
        this.createNavbar();
    };
    getIndexHTML = () => {
        return this.main;
    };
    createNavbar = () => {
        this.navbar.init();
        const navbarHTML = this.navbar.getNavbarHTML();
        const navbarStart = document.querySelector(".nav-btn-left");
        navbarStart.appendChild(navbarHTML);
        this.navbar.onSectionChange((section) => this.pageLoader(section));
    };
    pageLoader = (section) => {
        const page = document.querySelector("main");
        page.innerHTML = "";
        switch (section) {
            case "home":
                page.innerHTML = "<h1>Home section coming soon</h1>";
                break;
            case "rentals":
                this.createMovies();
                break;
            case "about":
                page.innerHTML = "<h1>About us</h1>";
                break;
            default:
                page.innerHTML = "<h1>404 - Section not found</h1>";
        }
    };
    createMovies = () => {
        this.movies.init();
        const moviesHTML = this.movies.getMoviesHTML();
        // const paginatorHTML = this.movies.getPaginatorHTML();
        const mainDiv = document.querySelector("main");
        mainDiv.appendChild(moviesHTML);
        // mainDiv.appendChild(paginatorHTML);
    };
    render = () => { };
}
