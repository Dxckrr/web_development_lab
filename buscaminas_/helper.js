export const createBoard = (SIZE) => {
    const matriz = [];

    for (let i = 0; i < SIZE; i++) {
        matriz[i] = [];
        for (let j = 0; j < SIZE; j++) {
            matriz[i][j] = 'X';
        }
    }
    return matriz
}
export const createBoardWithBombs = (SIZE) => {
    const boardWithBombs = createBoard(SIZE)
    const bombs = generateBombs(boardWithBombs)
    // let placesDiscovered = 0
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (boardWithBombs[i][j] === 'X') {
                checkMines(i, j, boardWithBombs, boardWithBombs)
            }
        }
    }
    return { boardWithBombs, bombs }
}
export const printBoard = (matriz) => {
    console.log("- ".repeat(matriz.length));
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
    console.log("- ".repeat(matriz.length));
}

const generateBombs = (matriz) => {
    // math random just returns 0 - 1 , so its multiplied by the size of the board
    // math floor rounds a number to the closest interger
    const numberOfBombs = Math.floor(Math.random() * (matriz.length ** 2) / 2) + 1
    let bombSetter = numberOfBombs
    while (bombSetter > 0) {
        const x = Math.floor(Math.random() * matriz.length);
        const y = Math.floor(Math.random() * matriz.length);
        if (matriz[x][y] === 'X') {
            matriz[x][y] = 'M';
            bombSetter--
        }
    }
    return numberOfBombs
}

// in this function there are two 'cases'
// when the matriz is equal to matrizBoard (filling the solved board)
// when the matriz is different and is to check while playing
export const checkMines = (positionX, positionY, matriz, matrizBoard) => {
    let MineCount = 0;
    for (let i = positionX - 1; i <= positionX + 1; i++) {
        if (i < 0 || i >= matriz.length) continue
        for (let j = positionY - 1; j <= positionY + 1; j++) {
            if (j < 0 || j >= matriz.length) continue
            if (matrizBoard[i][j] !== 'M') {
                matriz[i][j] = matrizBoard[i][j]
            } else {
                MineCount++
            }
        }
    }
    matriz[positionX][positionY] = MineCount
}
export const checkWin = (board_, bombs) => {
    const fieldsToDiscover = (board_.length ** 2) - bombs
    let count = 0;
    for (let i = 0; i < board_.length; i++) {
        for (let j = 0; j < board_.length; j++) {
            if (board_[i][j] !== 'X') {
                count++
            }
        }
    }
    return count !== fieldsToDiscover
}
