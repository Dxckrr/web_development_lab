import {Ship} from "./ship.interface"
export interface Board {
    name: string;
    size: number;
    ships: Ship[]
}