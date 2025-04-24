import Observer from "../../shared/types/Observer.js";
import MoviesModel from "../model/MoviesModel.js";
import MoviesTemplate from "../template/MoviesTemplate.js";

export default class MoviesView extends Observer<MoviesModel> {
  private readonly moviesHTML: HTMLElement;
  private readonly searchItem: HTMLElement | null;
  private readonly paginator: HTMLElement

  constructor(moviesModel: MoviesModel) {
    super(moviesModel);
    this.moviesHTML = document.createElement("movies");
    this.paginator = document.createElement(`paginator`);
    this.moviesHTML.classList.add("movies");
    this.searchItem = document.getElementById("search");
  }

  readonly init = (): void => {
    console.log("MoviesView initialized");
  };

  readonly update = (): void => {
    this.render();
  };
  readonly getPaginatorHTML=(): HTMLElement=>{
    return this.paginator
  }

  readonly render = async (): Promise<void> => {
    const movieModel = this.subject as MoviesModel
    const moviesData = (this.subject as MoviesModel).getMoviesData();
    const template = new MoviesTemplate(moviesData);
    const gridMovies = await template.get()
    this.moviesHTML.innerHTML = gridMovies 
    const button = await template.renderPaginationButtons(movieModel.getCurrentPage(), movieModel.getSizeGrid())
    this.paginator.innerHTML = button

    this.assingEvent(movieModel)
  };
  private readonly assingEvent = ( modelMovie : MoviesModel): void => {
    const prevBtn = document.querySelector('#prev-button')
    const nextBtn = document.querySelector('#next-button')
  
    prevBtn?.addEventListener('click', () => {
      modelMovie.previousPage()
    })
  
    nextBtn?.addEventListener('click', () => {
      modelMovie.nextPage()
    })
  }

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
