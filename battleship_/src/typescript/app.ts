import { Board } from "./models/Board"
import { Ship } from "./models/Ship"
import prompt from "./helpers/readLine"
import { numberToString, stringToNumber } from "./helpers/dataParser"
import { generateRandom } from "./helpers/generator"

const SIZE: number = 16

//creating boards && ships
const board_player_1: Board = new Board("PLAYER 1", SIZE)
const board_player_2: Board = new Board("PLAYER 2", SIZE)

let isPlay: boolean = true
const initGame = async () => {
    console.log("- - -          PLAYER 1            - - -")
    console.log("           CREATE YOUR SET-UP          ")
    await fillBoard(board_player_1)
    console.log("- - -          PLAYER 2            - - -")
    console.log("           CREATING ...SET-UP          ")
    await fillBoard_Bot(board_player_2)
    // start logic and play in order to give a move to player 1 and therefore player 2 will be automaticl0y realeased
    while (isPlay) {
        // turns
        //player 1 shoot player 2
        console.log("- - - -        ENEMY BOARD (P.2)      - - - -")
        board_player_2.printBoard("game")
        let cordinateXToShoot = String(await prompt("[A , B , C ...] Type coordinate X to shoot: "))
        let cordinateYToShoot = Number(await prompt("[0 , 1 ,2 ...] Type coordinate Y to shoot: "))
        board_player_2
            .shoot
            (stringToNumber(cordinateXToShoot), cordinateYToShoot)
        board_player_2.printBoard("game")
        isPlay = checkWin(board_player_2)
        if (!isPlay) break;
        //player 2 shoot player 1
        //console.log("- - - -        ENEMY BOARD (P.1)      - - - -")
        // board_player_1.printBoard("game")
        board_player_1
            .shoot
            ((generateRandom(board_player_1.size)), Number(generateRandom(board_player_1.size)))
        console.log("===".repeat(SIZE + 1))
        console.log(" ".repeat(SIZE), "YOUR BOARD")
        board_player_1.printBoard("game")
        console.log("\n\n\n\n")
        console.log("===".repeat(SIZE + 1))
        isPlay = checkWin(board_player_1)
        if (!isPlay) break;
    }

}
const fillBoard = async (board: Board) => {
    for (let i = 1; i < 5; i++) {
        let placed = false
        while (!placed) {
            console.log("Choose a position to put your ship")
            console.log(`Where do u want to put your ship with ${i} size`)
            let startX = String(await (prompt("[A , B , C ...] x:")));
            let startY = Number(await prompt("[0 , 1 ,2 ...] y: "));
            let direction = String(await prompt("1: Horizontal , 2: Vertical"));
            let ship = new Ship(i, startX, startY, direction)
            if (board.setShip(ship)) {
                placed = true;
                board.printBoard("final")
            } else {
                console.log("Invalid position! Try again.");
            }
        }
    }
}
const fillBoard_Bot = (board: Board) => {
    for (let i = 1; i < 5; i++) {
        let placed = false
        while (!placed) {
            let startX = numberToString(generateRandom(board.size));
            let startY = Number(generateRandom(board.size));
            let direction = String(Math.random());

            let ship = new Ship(i, startX, startY, direction)
            if (board.setShip(ship)) {
                placed = true;
            }
        }
    }
}
const checkWin = (board: Board): boolean => {
    let keepPlaying: boolean = true
    let count = 0
    for (let i = 0; i < board.size; i++) {
        for (let j = 0; j < board.size; j++) {
            if ((board.board[i][j] instanceof Ship) && (board.board[i][j] as Ship).getIsShooted() === true) {
                count++
            }
        }
    }
    if (count === board.ships) {
        keepPlaying = false
    }
    if (!keepPlaying) {
        console.log(`${board.name} LOSSES !`)
    }
    return keepPlaying
}
initGame()




