import Favorite from "../../domain/favorite/Favorite";
import NullFavorite from "../../domain/favorite/NullFavorite";
import FavoriteRepositoryPort from "../../domain/port/driven/FavoriteRepositoryPort";
import FavoriteServicePort from "../../domain/port/driver/service/FavoriteServicePort";

export default class FavoriteService implements FavoriteServicePort {
    constructor(private readonly favoriteRepository: FavoriteRepositoryPort) { }

    async getFavoritesByUser(userId: string): Promise<Favorite> {
        try {
            const favorites = await this.favoriteRepository.getAllFavorites(Number(userId));
            console.log(favorites)
            return new NullFavorite();
        } catch (error) {
            throw new Error(`Error fetching favorites for user ${userId}`);
        }
    }
}
