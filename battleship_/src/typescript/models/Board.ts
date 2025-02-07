import { numberToString } from "../helpers/dataParser";
import { Board as BoardInterface } from "../interface/board.interface";
import { Ship } from "./Ship";

export class Board implements BoardInterface {
    public name: string;
    public size: number;
    public ships: number;
    public board: (string | Ship)[][];

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
        this.ships = 0;
        this.board = this.createBoard(this.size);
    }
    public createBoard = (size: number): (string | Ship)[][] => {
        let matriz: (string | Ship)[][] = [];
        for (let i = 0; i < size; i++) {
            matriz[i] = []
            for (let j = 0; j < size; j++) {
                matriz[i][j] = '.'
            }
        }
        return matriz;
    }
    public printBoard = (game: string): void => {
        console.log("  " + Array.from({ length: this.board.length }, (_, i) => (i < 10 ? ` ${i}` : `${i}`)).join(" "));
        console.log(" - ".repeat(this.board.length));
        for (let i = 0; i < this.board.length; i++) {
            let row = numberToString(i) + "  ";
            for (let j = 0; j < this.board[i].length; j++) {
                let cell = this.board[i][j];
                if (cell instanceof Ship) {
                    row += game === "final" || cell.getIsShooted() ? cell.getString() + "  " : ".  ";
                } else {
                    row += (this.board[i][j]) + "  ";
                }
            }
            console.log(row.trim());
        }
        console.log(" - ".repeat(this.board.length));
    }
    public setShip(ship: Ship): boolean {
        console.log(ship.startX, ship.startY)
        if ((ship.startX + ship.size) <= this.board.length && (ship.startY + ship.size) <= this.board.length) {
            if (this.board[ship.startX][ship.startY] instanceof Ship) return false;
            for (let k = 0; k < ship.size; k++) {
                if (ship.direction === "horizontal") {
                    this.board[ship.startX][ship.startY + k] = ship
                } else {
                    this.board[ship.startX + k][ship.startY] = ship
                }
                this.ships++;
            }
            return true;
        }
        return false;
    }
    public shoot(positionX: number, positionY: number) : string {
        if (positionX >= this.size || positionY >= this.size) return "Bad shoot, that position does not exist"
        if (this.board[positionX][positionY] !== ".") {
            let ship = this.board[positionX][positionY]
            if (ship instanceof Ship) {
                console.log(`YOU HIT AN SHIP! of ${ship.size} size`)
                for (let b = 0; b < ship.size; b++) {
                    if (ship.getDirection() === "horizontal") {
                        (this.board[ship.startX][ship.startY + b] as Ship).setIsShooted(true)
                    } else {
                        (this.board[ship.startX + b][ship.startY] as Ship).setIsShooted(true)
                    }
                }
            }
        } else {
            this.board[positionX][positionY] = "X"
        }
        return ""
    }
}