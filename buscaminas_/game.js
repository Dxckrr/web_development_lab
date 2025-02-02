import prompt from "./readLine.js"
import { printBoard, createBoard, createBoardWithBombs, checkMines, checkWin } from './helper.js'
const initGame = async (SIZE) => {
    // create boards
    const board_ = createBoard(SIZE)
    const { bombs, boardWithBombs } = createBoardWithBombs(SIZE)
    // printBoard(boardWithBombs)
    console.log("- - BOARD - -")
    printBoard(board_)

    let isPlaying = true
    while (isPlaying) {
        let field_X = Number(await prompt("Enter 'x' for row: "))
        let field_Y = Number(await prompt("Enter 'y' for col: "))
        if (boardWithBombs[field_X][field_Y] === 'M') {
            console.log("Perdiste!")
            printBoard(boardWithBombs)
            break
        }
        if (board_[field_X][field_Y] !== 'X') continue
        checkMines(field_X, field_Y, board_, boardWithBombs)
        isPlaying = checkWin(board_, bombs)
        printBoard(board_)
        if (!isPlaying) { console.log("You win!"); break }
        // let keepPlaying = await prompt("Keep playing? [Press any key], if no, type 'no'")
        // if (keepPlaying.toLowerCase() === 'no') isPlay = false

    }

}
export default initGame;