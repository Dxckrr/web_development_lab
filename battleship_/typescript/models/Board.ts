import { Board as BoardInterface } from "../interface/board.interface";
import { Ship } from "./Ship";

export class Board implements BoardInterface {
    public name: string;
    public size: number;
    public ships: Ship[];
    public board: string[][] | Ship[][];
    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
        this.ships = [];
        this.board = this.createBoard(this.size);
    }
    public createBoard = (size: number): string[][] => {
        let matriz: string[][] = []
        for (let i = 0; i < size; i++) {
            matriz[i] = []
            for (let j = 0; j < size; j++) {
                matriz[i][j] = '.'
            }
        }
        return matriz;
    }
    public printBoard = (): void => {
        console.log("  " + Array.from({ length: this.board.length }, (_, i) => (i < 10 ? ` ${i}` : `${i}`)).join(" "));
        console.log("-  ".repeat(this.board.length));
        for (let i = 0; i < this.board.length; i++) {
            let row = String.fromCharCode(65 + i) + "  ";
            for (let j = 0; j < this.board[i].length; j++) {
                row += (this.board[i][j]).toString() + "  ";
            }
            console.log(row.trim());
        }
        console.log("-  ".repeat(this.board.length));
    }
    public setShip(ship: Ship): void {
        console.log(ship.startX, ship.startY)
        if ((ship.startX + ship.size) <= this.board.length && (ship.startY + ship.size) <= this.board.length) {
            for (let k = 0; k < ship.size; k++) {
                console.log(ship.direction)
                if (ship.direction === "horizontal") {
                    this.board[ship.startX][ship.startY + k] = ship
                } else {
                    this.board[ship.startX + k][ship.startY] = ship
                }
            }
        }
    }
}