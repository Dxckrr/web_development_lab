import { stringToNumber } from "../helpers/dataParser";
import { Ship as ShipInterface } from "../interface/ship.interface"
import items_json from "../../data/items.json"
import { Item } from "../../data/types/item.interface"
export class Ship implements ShipInterface {

    public size: number;
    public startX: number;
    public startY: number;
    public direction: string;
    public isShooted: boolean;

    constructor(size: number, startX: string, startY: number, direction: string) {
        this.size = size;
        this.startX = stringToNumber(startX);
        this.startY = startY;
        this.direction = direction === "1" ? "horizontal" : "vertical";
        this.isShooted = false;
    }
    public getString(): string {
        return String(items_json.find((item: Item) => item.size === this.size)?.figure)
    }
    public getDirection(): string {
        return this.direction;
    }
    public getIsShooted(): boolean {
        return this.isShooted;
    }
    public setIsShooted(isShooted: boolean): void {
        this.isShooted = isShooted;
    }
}