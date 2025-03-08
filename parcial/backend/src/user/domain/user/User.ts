import AbstractUser, { UserInterface } from "./AbstractUser";

export default class User extends AbstractUser {
    constructor(user: UserInterface) {
        super(user)
    }

    public isNull = (): boolean => false
}
