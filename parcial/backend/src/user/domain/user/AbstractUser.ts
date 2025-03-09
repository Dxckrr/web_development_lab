export default abstract class AbstractUser {
    protected id: number;
    protected names: string;
    protected surnames: string;
    protected email: string;
    protected password: string;
    protected role: Role;
    protected creation_date: Date;

    constructor(userInterface: UserInterface) {
        this.id = userInterface.id;
        this.names = userInterface.names;
        this.surnames = userInterface.surnames;
        this.email = userInterface.email;
        this.password = userInterface.password;
        this.role = userInterface.role;
        this.creation_date = userInterface.creation_date

    }

    public abstract isNull(): boolean;
    public getId(): number { return this.id }
    public getName(): string { return this.names; }
    public getSurname(): string { return this.surnames; }
    public getEmail(): string { return this.email; }
    public getPassword(): string { return this.password; }
    public getRole(): Role { return this.role; }
    public getCreationDate(): Date { return this.creation_date; }

}


type Role = 'ADMIN' | 'USER';
interface UserInterface {
    id: number,
    names: string,
    surnames: string,
    email: string,
    password: string,
    role: Role
    creation_date: Date

}

export { UserInterface, Role }