
import MySQLCategoryInterface from "../../../../sql/domain/interfaces/MYSQLCategoryInterface";
import Category from "../../../domain/category/Category";
import NullCategory from "../../../domain/category/NullCategory";

export default class GetterCategory {
    constructor(
        private readonly mySQLCategory: MySQLCategoryInterface
    ) { }

    public async get(id: number): Promise<Category> {
        if (id === 0) {
            return new NullCategory();
        }
        const sqlCategory = await this.mySQLCategory.findById(String(id));
        const category = new Category({
            id: sqlCategory.id,
            name: sqlCategory.name,
            description: sqlCategory.description,
        });
        return Promise.resolve(category);
    }

}