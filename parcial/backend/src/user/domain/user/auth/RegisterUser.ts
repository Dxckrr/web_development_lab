import AbstractRegisterUser, { RegisterUserInterface } from "./AbstractRegisterUser"

export default class RegisterUser extends AbstractRegisterUser {
    constructor(registerUserInterface: RegisterUserInterface) {
        super(registerUserInterface)
    }
    public isNull = (): boolean => false
}
