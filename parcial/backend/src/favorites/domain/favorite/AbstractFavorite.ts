import AbstractProduct from "../../../product/domain/product/AbstractProduct";

export default abstract class AbstractFavorite {
    protected products: AbstractProduct[];

    constructor(favoriteInterface: FavoriteInterface) {
        this.products = favoriteInterface.products;
    }

    public abstract isNull(): boolean;

    public getProducts = (): AbstractProduct[] => this.products;
}

interface FavoriteInterface {
    products: AbstractProduct[];
} export { FavoriteInterface }

