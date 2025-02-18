import ContactFactory from "./contact/factory/contact.factory";
import Server from "./express/server";

const contactView = ContactFactory.createContactView()
const server = new Server(contactView)
server.start()