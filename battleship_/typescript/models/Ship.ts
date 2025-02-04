import {Ship as ShipInterface} from "../interface/ship.interface"

export class Ship implements ShipInterface {
    public size: number;
    public startX: number;
    public startY: number;
    public direction: string;
    constructor(size: number, startX: string, startY:number, direction: string) {
        this.size = size;
        this.startX = (startX.charCodeAt(0) - 65);
        this.startY = startY;
        // this.end = start + size - 1;
        this.direction = direction === "1" ? "horizontal" : "vertical";
    }
    public toString() : string {
        return this.size.toString()
    }
 }