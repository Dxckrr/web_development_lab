import AbstractCategory from "./AbstractCategory";

export default class NullCategory extends AbstractCategory {
    constructor() {
        super({
            id: 0,
            name: "Not found",
            description: "Not found",
        })
    }
    public isNull = (): boolean => true;
}