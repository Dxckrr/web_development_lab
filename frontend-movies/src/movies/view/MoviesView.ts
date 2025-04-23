import Observer from "../../shared/types/Observer.js";
import MoviesModel from "../model/MoviesModel.js";
import MoviesTemplate from "../template/MoviesTemplate.js";

export default class MoviesView extends Observer<MoviesModel> {
  private readonly moviesHTML: HTMLElement;
  private readonly searchItem: HTMLElement | null;

  constructor(moviesModel: MoviesModel) {
    super(moviesModel);
    this.moviesHTML = document.createElement("movies");
    this.moviesHTML.classList.add("movies");
    this.searchItem = document.getElementById("search");
  }

  readonly init = (): void => {
    console.log("MoviesView initialized");
  };

  readonly update = (): void => {
    this.render();
  };

  readonly render = async (): Promise<void> => {
    const moviesData = (this.subject as MoviesModel).getMoviesData();
    const template = new MoviesTemplate(moviesData);
    this.moviesHTML.innerHTML = await template.get();
  };

  readonly getMoviesHTML = (): HTMLElement => {
    return this.moviesHTML;
  };
  readonly getSearchForm = (): HTMLElement | null => {
    return this.searchItem;
  };
  readonly getSearchValue = (): string => {
    const form = this.getSearchForm() as HTMLFormElement;
    const input = form.elements.namedItem("searchValue") as HTMLInputElement;
    return input.value;
  };
}
