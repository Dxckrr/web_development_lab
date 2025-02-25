import GameController from "../controller/game.controller";
import GameModel from "../model/game.model";
import GameView from "../view/game.view";

export default class GameFactory {
    public static createGameView(): GameView {
        const gameModel = new GameModel()
        const gameontroller = new GameController(gameModel);
        return new GameView(gameontroller)
    }
}