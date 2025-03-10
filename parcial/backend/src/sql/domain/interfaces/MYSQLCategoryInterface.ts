import { CategoryInterface } from "../../../product/domain/category/AbstractCategory";

export default interface MySQLCategoryInterface{
    findById(id : string): Promise<CategoryInterface>;
}
