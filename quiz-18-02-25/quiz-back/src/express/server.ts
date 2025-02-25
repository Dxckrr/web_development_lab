import express, { Application } from "express";
import cors from "cors"
import Environment from "../shared/environment";
// import PlayerView from "../player/view/player.view";
import GameView from "../game/view/game.view";

export default class Server {
    private readonly app: Application  //readonly -> inicializa solo una vez
    constructor(
        // private readonly playerView: PlayerView,
        private readonly gameView: GameView
    ) {
        this.app = express()
        this.configure()
        this.routes()
        this.middlewares()
    }
    public routes(): void {
        // this.app.use('/api/v1.0/player', this.playerView.router)
        this.app.use('/api/v1.0/game', this.gameView.router)
    }
    public configure() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
      }
    private middlewares(): void {
        this.app.use(cors({
            origin: "all",
            credentials: true
        }));
    }
    public start(): void {
        const HOST = Environment.getHost();
        const PORT = Environment.getPort();
        const PROTOCOL = Environment.getProtocol();
        this.app.listen(PORT, () => console.log(`Server running on ${PROTOCOL} ://${HOST}:${PORT}`));
    }
}