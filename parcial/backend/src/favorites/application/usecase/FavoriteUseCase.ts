import Favorite from "../../domain/favorite/Favorite";
import FavoriteServicePort from "../../domain/port/driver/service/FavoriteServicePort";
import FavoriteUseCasePort from "../../domain/port/driver/usecase/FavoriteUseCasePort";

export default class FavoriteUseCase implements FavoriteUseCasePort {
    constructor(private readonly favoriteService: FavoriteServicePort) { }
    async getFavoritesByUser(userId: string): Promise<Favorite> {
        return await this.favoriteService.getFavoritesByUser(userId)
    }

}