import AbstractUser from './AbstractUser'

export default class NullUser extends AbstractUser {
    constructor() {
        super({
            id: 0,
            names: 'Null User',
            surnames: 'Null User',
            email: 'Not found',
            password: 'Not found',
            role: 'USER',
            creation_date: new Date(),
            // isActive: false,
            // lastLogin: new Date(0),
            // registrationDate: new Date(0),
            // totalPurchases: 0,
            // totalSpent: 0,  
        })
    }

    public isNull = (): boolean => true
}
