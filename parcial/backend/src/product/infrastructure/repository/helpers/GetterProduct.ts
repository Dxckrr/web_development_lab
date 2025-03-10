import { ProductSQL } from "../../../../sql/domain/models/product/SQLProduct";
import Product from "../../../domain/product/Product";
import GetterCategory from "./GetterCategory";
import GetterImage from "./GetterImage";

export default class GetterProduct {
    constructor(
        private readonly getterImage: GetterImage,
        private readonly getterCategory: GetterCategory

    ){}
    public get = async (json: ProductSQL): Promise<Product> => {
        return new Product({
            id: json.id ?? 0,
            name: json.name ?? '',
            description: json.description || '',
            price: json.price || 0,
            stock: json.stock || 0,
            image: this.getterImage.get(json.image_url) || null,
            category: await this.getterCategory.get(json.category_id) || null,
        });
    }
}