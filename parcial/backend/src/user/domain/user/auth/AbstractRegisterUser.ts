import { Role } from "../AbstractUser"

export default abstract class AbstractRegisterUser {
    protected names: string
    protected surnames: string
    protected email: string
    protected password: string
    protected role : string

    constructor(registerUserInterface: RegisterUserInterface) {
        this.names = registerUserInterface.names;
        this.surnames = registerUserInterface.surnames;
        this.email = registerUserInterface.email;
        this.password = registerUserInterface.password;
        this.role = registerUserInterface.role;
    }
    public abstract isNull(): boolean;
}
interface RegisterUserInterface {
    names: string,
    surnames: string,
    email: string,
    password: string,
    role: Role,
}
export { RegisterUserInterface }
