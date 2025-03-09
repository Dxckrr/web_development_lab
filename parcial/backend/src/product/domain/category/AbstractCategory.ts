
export default abstract class AbstractCategory {
    protected id: number;
    protected name: string;
    protected description: string;

    constructor(categoryInterface: CategoryInterface) {
        this.id = categoryInterface.id;
        this.name = categoryInterface.name;
        this.description = categoryInterface.description;
    }

    public abstract isNull(): boolean;

    public getId = (): number => this.id;

    public getName = (): string => this.name;

    public getDescription = (): string => this.description;

}
interface CategoryInterface {
    id: number;
    name: string;
    description: string;
}
export { CategoryInterface }