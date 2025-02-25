import GameModel from "../model/game.model";
import { Request, Response } from "express";

export default class GameController {
    constructor(private readonly gameModel: GameModel) { }
    public async addGame(req: Request, res: Response): Promise<void> {
        const { player1, player2 } = req.body
        const game = await this.gameModel.startGame(String(player1), String(player2))
        res.status(200).send(game)
    }
    public test(_req: Request, res: Response): void {
        res.send('ok')
    }
}
