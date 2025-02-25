import { Router } from "express";
import PlayerController from "../controller/player.controller";

export default class PlayerView {
    public router: Router

    // private readonly contact: Contact
    constructor(private readonly playerController: PlayerController) {
        this.router = Router()
        this.routes()
    }
    
    public routes(): void {
        // this.router.post(
        //     '/add',
        //     this.contactController.addContact.bind(this.contactController)
        // )
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


