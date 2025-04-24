import Movies from "../../movies/Movies.js";
import Navbar from "../../navbar/Navbar.js";

export default class IndexView {
  private readonly main: HTMLElement;
  private readonly navbar: Navbar;
  private readonly movies: Movies;
  constructor() {
    const main = document.querySelector("main") as HTMLElement;
    if (!main) this.main = document.createElement("main");
    this.main = main;
    this.navbar = new Navbar();
    this.movies = new Movies();
  }

  readonly init = () => {
    this.createNavbar();
  };
  readonly getIndexHTML = (): HTMLElement => {
    return this.main;
  };
  readonly createNavbar = () => {
    this.navbar.init();
    const navbarHTML = this.navbar.getNavbarHTML();
    const navbarStart = document.querySelector(".nav-btn-left") as HTMLElement;
    navbarStart.appendChild(navbarHTML);
    this.navbar.onSectionChange((section: string) => this.pageLoader(section));
  };
  readonly pageLoader = (section: string): void => {
    const page = document.querySelector("main") as HTMLElement;
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
  readonly createMovies = () => {
    this.movies.init();
    const moviesHTML = this.movies.getMoviesHTML();
    // const paginatorHTML = this.movies.getPaginatorHTML();
    const mainDiv = document.querySelector("main") as HTMLElement;
    mainDiv.appendChild(moviesHTML);
    // mainDiv.appendChild(paginatorHTML);
  };
  readonly render = () => {};
}
