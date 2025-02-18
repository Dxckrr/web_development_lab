import { Request, Response } from "express"
import ContactModel from "../model/contact.model"
import Contact from "../types/contact"
export default class ContactController {
    constructor(private readonly contactModel: ContactModel) { }
    public addContact(req: Request, res: Response): void {
        const contact: Contact = req.body
        console.log(contact)
        res.status(200).json(this.contactModel.addContact(contact))
    }
    public getContactById(req: Request, res: Response): void {
        try {
            const { id } = req.params
            if (id) res.status(200).send(this.contactModel.getContactById(Number(id)))

        } catch (err) {
            res.status(400).send({ message: 'Error' })
        }
    }
    public getAllContact(_req: Request, res: Response): void {
        res.status(200).send(this.contactModel.getAllContacts())
    }
    public updateContact(req: Request, res: Response): void {
        const contact: Contact = req.body
        const { id } = req.params
        res.status(200).json(this.contactModel.updateContact(contact,Number(id)))
    }
}