import AbstractFavorite, { FavoriteInterface } from "./AbstractFavorite";

export default class Favorite extends AbstractFavorite {
    constructor(favoriteInterface: FavoriteInterface){
        super(favoriteInterface);
    }

    public isNull = (): boolean => false;
}