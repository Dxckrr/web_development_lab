export default abstract class AbstractUser {
    protected id: number;
    protected names: string;
    protected surnames: string;
    protected email: string;
    protected password: string;
    protected role: Role;

    constructor(userInterface: UserInterface) {
        this.id = userInterface.id;
        this.names = userInterface.names;
        this.surnames = userInterface.surnames;
        this.email = userInterface.email;
        this.password = userInterface.password;
        this.role = userInterface.role;

    }

    public abstract isNull(): boolean;
    public getId(): number { return this.id }
    public getName(): string { return this.names; }
    public getSurname(): string { return this.surnames; }
    public getEmail(): string { return this.email; }
    public getPassword(): string { return this.password; }
    public getRole(): Role { return this.role; }
}

type Role = 'ADMIN' | 'USER';
interface UserInterface {
    id: number,
    names: string,
    surnames: string,
    email: string,
    password: string,
    role: Role

}

export { UserInterface, Role }