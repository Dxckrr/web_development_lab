
export default interface FavoriteRepositoryPort {
    getAllFavorites(id : number): Promise<boolean>;
}