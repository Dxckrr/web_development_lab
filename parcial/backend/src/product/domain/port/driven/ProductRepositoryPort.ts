import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import { ProductInterface } from "../../product/AbstractProduct";
export default interface ProductRepositoryPort extends RepositoryInterface<string, ProductInterface> {

}