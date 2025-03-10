import MySQLProductInterface from "../../../sql/domain/interfaces/MYSQLProductInterface";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
import Product from "../../domain/product/Product";
import GetterProduct from "./helpers/GetterProduct";
export default class ProductRepository implements ProductRepositoryPort {
    constructor(
        private readonly mySQLProduct: MySQLProductInterface,
        private readonly getterProduct : GetterProduct
    ) { }

    save = (_item: Product) => {
        throw new Error("Method not implemented.")
    };
    async findAll(): Promise<Product[]> {
        const products = await this.mySQLProduct.findAllProducts();
        return Promise.all(products.map((product) => this.getterProduct.get(product)));
    }
    findById = (_id: string) => {
        throw new Error("Method not implemented.")
    }
        ;
    update = (_id: string, _item: Partial<Product>) => {
        throw new Error("Method not implemented.")
    }
    delete = (_id: string) => {
        throw new Error("Method not implemented.")
    }
        ;
    patch = (_id: string, _item: Partial<Product>) => {
        throw new Error("Method not implemented.")
    }
    findByCategory(_category: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findByPriceRange(_minPrice: number, _maxPrice: number): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}