export default abstract class AbstractRegisterUser {
    protected names: string
    protected surnames: string
    protected email: string
    protected password: string

    constructor(registerUserInterface: RegisterUserInterface) {
        this.names = registerUserInterface.names;
        this.surnames = registerUserInterface.surnames;
        this.email = registerUserInterface.email;
        this.password = registerUserInterface.password;
    }
    public abstract isNull(): boolean;
}
interface RegisterUserInterface {
    names: string,
    surnames: string,
    email: string,
    password: string,
}
export { RegisterUserInterface }
