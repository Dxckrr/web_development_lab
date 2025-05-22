import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Cart from "../../cart/Cart";


export default interface CartRepositoryPort extends RepositoryInterface<string, Cart> {
    addItemToCart: (id: string, product_id: string, quantity:number) => Promise<Cart>;
    deleteItemFromCart: (id: string, product_id: string) => Promise<Cart>;
}