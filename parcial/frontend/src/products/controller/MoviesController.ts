import MoviesModel from '../model/ProductsModel.js'
import MoviesView from '../view/ProductsView.js'

export default class ProductsController {
  constructor(
    private readonly model: MoviesModel,
    private readonly view: MoviesView
  ) {}

  readonly init = async (): Promise<void> => {
    console.log('ProductController initialized')
    this.view.init()
    await this.model.init()
  }
}
