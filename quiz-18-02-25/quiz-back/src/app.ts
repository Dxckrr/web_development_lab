// import PlayerFactory from "../src/player/factory/player.factory"
import Server from "./express/server";
import GameFactory from "./game/factory/game.factory";

// const playerFactory = PlayerFactory.createPlayerView()
const gameFactory = GameFactory.createGameView()
const server = new Server(gameFactory)
server.start()