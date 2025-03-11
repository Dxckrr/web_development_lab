import Favorite from "../../../favorite/Favorite";

export default interface FavoriteServicePort {
    getFavoritesByUser(userId: string): Promise<Favorite>;
}
