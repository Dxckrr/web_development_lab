import ProductsController from './controller/MoviesController.js';
import ProductsModel from './model/ProductsModel.js';
import ProductsView from './view/ProductsView.js';
export default class Products {
    productsController;
    ProductsModel;
    ProductsView;
    constructor(element) {
        this.ProductsModel = new ProductsModel();
        this.ProductsView = new ProductsView(this.ProductsModel, element);
        this.productsController = new ProductsController(this.ProductsModel, this.ProductsView);
    }
    init = async () => {
        await this.productsController.init();
    };
    getProductsHTML = () => {
        return this.ProductsView.getMoviesHTML();
    };
    filterProducts = (minPrice, maxPrice) => {
        return this.ProductsModel.filterProducts(minPrice, maxPrice);
    };
    searchProducts = async (search) => {
        await this.ProductsModel.searchProducts(search);
    };
}
