import Game from "../types/game";
import path from "path";
import { promises as fs } from 'fs'
import games_json from "../../../database/game.json"
export default class GameModel {
    private words: string[];

    constructor() {
        this.words = ["gelatina", "helado", "web"]
    }
    public async startGame(player1: string, player2: string): Promise<Game> {
        if(player1 === "null" || player2 === "null") return this.getNullGame()
        const random = Math.floor(2)
        const word = String(this.words[random]);
        const guessed = 0;
        const game_: Game = {
            player1: player1,
            player2: player2,
            guessed: guessed,
            word: word,
            inGameWord: ""

        };
        (games_json as Game[]).push(game_)
        await this.saveGameToFile(games_json)
        return game_
    }
    public checkWin(game: Game): boolean {
        if (game.guessed === game.word.length) {
            return true
        }
        return false
    }
    public checkCharacter(game: Game, character: string): void {
        if (game.word.includes(character)) {
            game.inGameWord += character
        }
    }

    private async saveGameToFile(game: Game[]): Promise<void> {
        const filePath = path.resolve(__dirname, "../../../database/game.json");
        const data = JSON.stringify(game, null, 2);
        await fs.writeFile(filePath, data);
    }


    private getNullGame(): Game {
        return { player1: "", player2: "", guessed: 0, inGameWord: "", word: "" };
    }

}
