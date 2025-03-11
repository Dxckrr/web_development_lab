import MySQLCartInterface from "../../../sql/domain/interfaces/MYSQLCartInterface";
import Cart from "../../domain/cart/Cart";
import CartRepositoryPort from "../../domain/port/driven/CartRepositoryPort";
import GetterCart from "./helpers/GetterCart";

export default class CartRepository implements CartRepositoryPort {
    constructor(private readonly mySQLCart: MySQLCartInterface,
        private readonly getterCart: GetterCart
    ) { }
    findAll!: () => Promise<Cart[]>;
    async findById(id: string): Promise<Cart> {
        return await this.getterCart.get(await this.mySQLCart.findById(id));
    }
    save!: (item: Cart) => Promise<Cart>;
    update!: (id: string, item: Partial<Cart>) => Promise<boolean | Cart>;
    patch!: (id: string, item: Partial<Cart>) => Promise<boolean | Cart>;
    delete!: (id: string) => Promise<boolean>;

}