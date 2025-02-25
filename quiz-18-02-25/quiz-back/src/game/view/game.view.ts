import { Router } from "express";
import GameController from "../controller/game.controller";

export default class GameView {
    public router: Router

    // private readonly contact: Contact
    constructor(private readonly gameController: GameController) {
        this.router = Router()
        this.routes()
    }

    public routes(): void {
        this.router.get(
            '/',
            this.gameController.test.bind(this.gameController)
        )
        this.router.post(
            '/addGame',
            this.gameController.addGame.bind(this.gameController)
        )
        // this.router.get(
        //     '/:id',
        //     this.contactController.getContactById.bind(this.contactController)
        // )
        // this.router.get(
        //     '/',
        //     this.contactController.getAllContact.bind(this.contactController)
        // )
        // this.router.put(
        //     '/:id',
        //     this.contactController.updateContact.bind(this.contactController)
        // )
    }

}


