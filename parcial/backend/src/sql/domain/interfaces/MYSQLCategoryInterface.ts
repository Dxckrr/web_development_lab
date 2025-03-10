import { CategoryInterface } from "../../../product/domain/category/AbstractCategory";

export default interface MySQLCategoryInterface{
    findCategoryById(id : string): Promise<CategoryInterface>;
}
