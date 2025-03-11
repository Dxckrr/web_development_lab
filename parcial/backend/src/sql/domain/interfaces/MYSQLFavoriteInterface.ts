// import Favorite from "../../../favorites/domain/favorite/Favorite";

export default interface MYSQLFavoriteInterface {
    getAll(userId : number): Promise<boolean>

}