import { Router } from 'express'
import ContactController from '../controller/contact.controller'

export default class ContactView {
    public router: Router

    constructor(private readonly contactController: ContactController) {
        this.router = Router()
        this.routes()
    }

    public routes(): void {
        this.router.post(
            '/add',
            this.contactController.addContact.bind(this.contactController)
        )
        this.router.get(
            '/:id',
            this.contactController.getContactById.bind(this.contactController)
        )
        this.router.get(
            '/',
            this.contactController.getAllContact.bind(this.contactController)
        )
        this.router.put(
            '/:id',
            this.contactController.updateContact.bind(this.contactController)
        )
    }
}