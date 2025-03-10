import { CategorySQL } from "../models/category/SQLCategory";

export default interface MySQLCategoryInterface{
    findCategoryById(id : string): Promise<CategorySQL>;
}
