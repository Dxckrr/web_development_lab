import { promises as fs } from 'fs';
import Contact from "../types/contact";
import contact_json from "../../../database/contacts.json";
import path from 'path';

export default class ContactModel {
    // private readonly contact: Contact
    constructor() {
    }

    public async addContact(contact: Contact): Promise<Contact> {
        (contact_json as Contact[]).push(contact);
        await this.saveContactsToFile(contact_json);
        return contact;
    }
    public getAllContacts(): Contact[] {
        return contact_json as Contact[];
    }

    public getContactById(id: number): Contact {
        console.log((contact_json as Contact[]).find(contact => contact.id === id))
        return (contact_json as Contact[]).find(contact => contact.id === id) || this.getNullContact();
    }

    public updateContact(contact: Contact, id: number): Contact {
        const index = (contact_json as Contact[]).findIndex(contact => contact.id === id);
        if (index === -1) {
            return this.getNullContact();
        }

        const existingContact = (contact_json as Contact[])[index] as Contact;
        existingContact.name = contact.name ? contact.name : existingContact.name;
        existingContact.email = contact.email ? contact.email : existingContact.email;
        existingContact.phone = contact.phone ? contact.phone : existingContact.phone;



        this.saveContactsToFile(contact_json);
        return existingContact;
    }

    private getNullContact(): Contact {
        return { id: 0, name: '', email: '', phone: '' };
    }

    // save to JSON
    private async saveContactsToFile(contacts: Contact[]): Promise<void> {
        const filePath = path.resolve(__dirname, "../../../database/contacts.json");
        const data = JSON.stringify(contacts, null, 2);
        await fs.writeFile(filePath, data);
    }
}
