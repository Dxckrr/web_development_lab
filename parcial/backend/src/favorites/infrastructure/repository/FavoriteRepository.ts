import MYSQLFavoriteInterface from "../../../sql/domain/interfaces/MYSQLFavoriteInterface";
import FavoriteRepositoryPort from "../../domain/port/driven/FavoriteRepositoryPort";

export default class FavoriteRepository implements FavoriteRepositoryPort {
    constructor(private readonly mySQLFavorite: MYSQLFavoriteInterface) { }
    async getAllFavorites(id: number): Promise<boolean> {
        return await this.mySQLFavorite.getAll(id);
    }
}