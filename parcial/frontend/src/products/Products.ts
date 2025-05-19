import ProductsController from './controller/MoviesController.js'
import ProductsModel from './model/ProductsModel.js'
import ProductsView from './view/ProductsView.js'

export default class Products {
  private readonly productsController: ProductsController
  private readonly ProductsModel: ProductsModel
  private readonly ProductsView: ProductsView

  constructor(element: string) {
    this.ProductsModel = new ProductsModel();
    this.ProductsView = new ProductsView(this.ProductsModel, element);
    this.productsController = new ProductsController(
      this.ProductsModel,
      this.ProductsView
    );
  }

  readonly init = async (): Promise<void> => {
    await this.productsController.init();
  }

  readonly getProductsHTML = (): HTMLElement => {
    return this.ProductsView.getMoviesHTML();
  }

  readonly searchMovies = async (search: string): Promise<void> => {
    return this.productsController.searchMovies(search);
  }
}
