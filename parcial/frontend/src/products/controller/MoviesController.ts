import MoviesModel from '../model/ProductsModel.js'
import MoviesView from '../view/ProductsView.js'

export default class MoviesController {
  constructor(
    private readonly model: MoviesModel,
    private readonly view: MoviesView
  ) {}

  readonly init = async (): Promise<void> => {
    console.log('MoviesController initialized')
    this.view.init()
    await this.model.init()
  }

  readonly searchMovies = async (search: string): Promise<void> => {
    if (search.length > 3 || search.length === 0) {
      return this.model.searchMovies(search)
    }
  }
}
