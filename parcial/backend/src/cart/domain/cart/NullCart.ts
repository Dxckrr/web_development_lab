import NullUser from "../../../user/domain/user/NullUser";
import AbstractCart from "./AbstractCart";

export default class NullCart extends AbstractCart {
    constructor() {
        super({
            id: 0,
            userOwner: new NullUser(),
            products: [],
        });
    }

    public isNull = (): boolean => true;
}