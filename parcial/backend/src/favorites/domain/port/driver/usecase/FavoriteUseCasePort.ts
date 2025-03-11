import Favorite from "../../../favorite/Favorite";

export default interface FavoriteUseCasePort {
    getFavoritesByUser(userId: string): Promise<Favorite>;
}
