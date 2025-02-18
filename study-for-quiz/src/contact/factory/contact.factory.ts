import ContactController from "../controller/contact.controller";
import ContactModel from "../model/contact.model";
import ContactView from "../view/contact.view";

export default class ContactFactory {
    public static createContactView(): ContactView {
        const contactModel = new ContactModel()
        const contactController = new ContactController(contactModel);
        return new ContactView(contactController)
    }
}