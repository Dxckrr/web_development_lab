import MYSQLFavoriteInterface from "../../../sql/domain/interfaces/MYSQLFavoriteInterface";
import FavoriteService from "../../application/service/FavoriteService";
import FavoriteUseCase from "../../application/usecase/FavoriteUseCase";
import FavoriteUseCasePort from "../../domain/port/driver/usecase/FavoriteUseCasePort";
import FavoriteRepository from "../repository/FavoriteRepository";


export default class FavoritesUseCaseFactory {
    public static create(mySQLFavorite: MYSQLFavoriteInterface): FavoriteUseCasePort {
        //repository
        const favoriteRepository = new FavoriteRepository(mySQLFavorite);
        //service
        const favoriteService = new FavoriteService(favoriteRepository);
        return new FavoriteUseCase(favoriteService);
    }
}
