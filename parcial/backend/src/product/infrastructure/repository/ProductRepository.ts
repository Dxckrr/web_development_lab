import MySQLProductInterface from "../../../sql/domain/interfaces/MYSQLProductInterface";
import ProductRepositoryPort from "../../domain/port/driven/ProductRepositoryPort";
import Product from "../../domain/product/Product";
import GetterProduct from "./helpers/GetterProduct";

export default class ProductRepository implements ProductRepositoryPort {
    constructor(
        private readonly mySQLProduct: MySQLProductInterface,
        private readonly getterProduct: GetterProduct
    ) { }

    async save(_imte: Product): Promise<Product> {
        throw new Error("Not implemented")
        // const product = await this.mySQLProduct.create(item)
        // return product
    };
    async findAll(): Promise<Product[]> {
        const products = await this.mySQLProduct.findAllProducts();
        return Promise.all(products.map((product) => this.getterProduct.get(product)));
    }
    async findById(id: string): Promise<Product> {
        const product = await this.mySQLProduct.findById(id);
        return this.getterProduct.get(product);
    };
    async getByCategory(categoryId: string): Promise<Product[]> {
        const products = await this.mySQLProduct.findByCategoryId(categoryId);
        return Promise.all(products.map((product) => this.getterProduct.get(product)));
    }
    async getByName(name: string): Promise<Product[]> {
        const products = await this.mySQLProduct.findByName(name);
        return Promise.all(products.map((product) => this.getterProduct.get(product)));
    }
    async getByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        const products = await this.mySQLProduct.findByPriceRange(minPrice, maxPrice);
        return Promise.all(products.map((product) => this.getterProduct.get(product)));
    }
    async updateProductStock(id: string, item: number): Promise<boolean> {
        return await this.mySQLProduct.updateProductStock(id, item)
    }
    update = (_id: string, _item: Partial<Product>) => {
        throw new Error("Method not implemented.")
    }
    async delete(id: string): Promise<boolean> {
        return await this.mySQLProduct.deleteById(id)
    }
    ;
    patch = (_id: string, _item: Partial<Product>) => {
        throw new Error("Method not implemented.")
    }

}