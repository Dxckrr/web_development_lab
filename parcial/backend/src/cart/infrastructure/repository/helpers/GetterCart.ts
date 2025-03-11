import CartSQL from "../../../../sql/domain/models/cart/SQLCart";
import UserRepositoryPort from "../../../../user/domain/port/driven/UserRepositoryPort";
import ProductRepositoryPort from "../../../../product/domain/port/driven/ProductRepositoryPort";
import User from "../../../../user/domain/user/User";
import Cart from "../../../domain/cart/Cart";
import AbstractProduct from "../../../../product/domain/product/AbstractProduct";
import { CartInterface } from "../../../domain/cart/AbstractCart";

export default class GetterCart {
    constructor(
        private readonly userRepository: UserRepositoryPort,
        private readonly productRepository: ProductRepositoryPort
    ) { }
    public async get(cartSQL: CartSQL): Promise<Cart> {
        const userOwner = new User(await this.userRepository.findById(String(cartSQL.user_id)));
        const productsArray: { product: AbstractProduct; quantity: number }[] = [];
        const promises = cartSQL.items.map(async (item) => {
            const product = await this.productRepository.findById(String(item.product_id));
            if (product) {
                productsArray.push({ product, quantity: item.quantity });
            }
        });
        
        await Promise.all(promises);
        


        console.log(promises)
        const cart: CartInterface = {
            id: cartSQL.id,
            userOwner,
            products: productsArray, // Ahora es un array en lugar de un Map
        };
        return new Cart(cart);
    }
}

