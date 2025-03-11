import MYSQLFavorite from "../../../sql/infrastructure/database/MYSQLFavorite"
import FavoriteRouterExpressInterface from "../../domain/interfaces/FavoriteRouterExpressInterface"
import FavoriteControllerExpress from "../express/controller/FavoriteControllerExpress"
import FavoriteRouterExpress from "../express/router/FavoriteRouterExpress"
import FavoritesUseCaseFactory from "./FavoriteUseCaseFactory"


export default class FavoriteRouterFactory {
    public static create(): FavoriteRouterExpressInterface {
        const mySQLFavorite = new MYSQLFavorite()
        //use case
        const favoriteUseCase = FavoritesUseCaseFactory.create(mySQLFavorite)
        // controller
        const favoriteController = new FavoriteControllerExpress(favoriteUseCase)

        return new FavoriteRouterExpress(favoriteController)
    }
}
