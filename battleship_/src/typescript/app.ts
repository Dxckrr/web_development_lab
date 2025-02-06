import { Board } from "./models/Board"
import { Ship } from "./models/Ship"
import prompt from "./helpers/readLine"
import { numberToString, stringToNumber } from "./helpers/dataParser"
import { generateRandom } from "./helpers/generator"

const SIZE: number = 16

//creating boards && ships
const board_player_1: Board = new Board("board_player_1", SIZE)
const board_player_2: Board = new Board("board_player_2", SIZE)

let isPlay = true
const initGame = async () => {
    console.log("PLAYER 1")
    console.log("CREATE YOUR SET-UP")
    await fillBoard(board_player_1)
    await fillBoard_Bot(board_player_2)
    // start logic and play in order to give a move to player 1 and therefore player 2 will be automaticl0y realeased
    while (isPlay) {
        let cordinateXToShoot = String(await prompt("[A , B , C ...] Type coordinate X to shoot"))
        let cordinateYToShoot = Number(await prompt("[0 , 1 ,2 ...] Type coordinate Y to shoot"))
        // turns
        //player 1 shoot player 2
        board_player_1
            .shoot
            (stringToNumber(cordinateXToShoot), cordinateYToShoot)
        board_player_1.printBoard()
        //player 2 shoot player 1
        board_player_2
            .shoot
            ((generateRandom(board_player_2.size)), Number(generateRandom(board_player_2.size)))
        board_player_2.printBoard()
        isPlay = false
    }

}
const fillBoard = async (board: Board) => {
    for (let i = 1; i < 5; i++) {
        console.log("choose a position to put your ship")
        let number = i
        console.log(`Where do u want to put your ship with ${number} size`)
        let startX = String(await (prompt("[A , B , C ...] x:")));
        let startY = Number(await prompt("[0 , 1 ,2 ...] y: "));
        let direction = String(await prompt("1: Horizontal , 2: Vertical"));

        let ship = new Ship(number, startX, startY, direction)
        board.setShip(ship)
        board.printBoard()
    }
}
const fillBoard_Bot = (board: Board) => {
    for (let i = 1; i < 5; i++) {
        let number = i
        let startX = numberToString(generateRandom(board.size));
        let startY = Number(generateRandom(board.size));
        let direction = String(Math.random());

        let ship = new Ship(number, startX, startY, direction)
        board.setShip(ship)
    }
}


initGame()




