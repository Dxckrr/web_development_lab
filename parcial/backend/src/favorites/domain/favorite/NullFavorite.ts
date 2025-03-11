import AbstractFavorite from "./AbstractFavorite";

export default class NullFavorite extends AbstractFavorite {
    constructor() {
        super({
            products: [],
        });
    }

    public isNull = (): boolean => true;
}