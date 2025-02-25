import prompt from "./readLine.js"
const ENV = "http://localhost:1802/api/v1.0/game"

// QUIZ FRONT
const isPlaying = true
while (isPlaying) {
    const player1 = await prompt("Player 1 enter your name: ")
    const player2 = await prompt("Player 2 enter your name: ")
    const data = {
        player1: player1,
        player2: player2
    }
    const game = await fetch(`${ENV}/addGame/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        return res.json()
    })
    console.log(game)
    console.log("Welcome")
    console.log("Your word is:")
    console.log("_ ".repeat(game.word.length));
    console.log("PLAYER 1, you go first")
    const attemp = await prompt("Character (A -Z ):")
    const checkCharacter = await fetch(`${ENV}/checkCharacter`)
    game.guessed = checkCharacter
    const checkWin = await fetch(`${ENV}/checkWin`)
    if (checkWin) break

}