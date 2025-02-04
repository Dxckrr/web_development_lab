import { Board } from "./models/Board"
import { Ship } from "./models/Ship"
import prompt from "./helpers/readLine"

const SIZE: number = 16
// for (let index = 0; index < 4; index++) {
//     const ship = new Ship()    
// }
//creating boards && ships
const board_player_1 = new Board("board_player_1", SIZE)
const board_player_2 = new Board("board_player_2", SIZE)

// board_player_1.printBoard()
// board_player_2.printBoard()

let isPlay = true
const initGame = async () => {
    // while (isPlay) {
    for (let i = 1; i < 5; i++) { // 5
        console.log("choose a position to put your ship")
        let number = i
        console.log(`Where do u want to put your ship with ${number} size`)
        let startX = String(await (prompt("[A , B , C ...] x:")));
        let startY = Number(await prompt("[0 , 1 ,2 ...] y: "));
        let direction = String(await prompt("1: Horizontal , 2: Vertical"));

        let ship = new Ship(number, startX, startY, direction)
        board_player_1.setShip(ship)
        board_player_1.printBoard()

    }
    // }
}
initGame()

// const board_Player_2 = new Board("board_player_2",SIZE)



