import MoviesModel from '../model/MoviesModel.js'
import MoviesView from '../view/MoviesView.js'

export default class MoviesController {
  constructor(
    private readonly model: MoviesModel,
    private readonly view: MoviesView,
  ) {
  }

  readonly init = async (): Promise<void> => {
    console.log('MoviesController initialized')
    this.view.init()
    await this.model.init()
    this.searchMovies()
  }
  readonly searchMovies = (): void => {
    const form = this.view.getSearchForm() as HTMLFormElement
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const value = this.view.getSearchValue()
      this.model.searchMovies(value)
      this.view.update()
    })

  }
}