import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Cart from "../../cart/Cart";


export default interface CartRepositoryPort extends RepositoryInterface<string, Cart> {
}