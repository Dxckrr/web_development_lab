export default abstract class AbstractUser {
    protected id: number;
    protected name: string;
    protected email: string;
    protected password: string;
    protected role: Role;

    constructor(userInterface: UserInterface) {
        this.id = userInterface.id;
        this.name = userInterface.name;
        this.email = userInterface.email;
        this.password = userInterface.password;
        this.role = userInterface.role;

    }

    public abstract isNull(): boolean;
    public getId(): number { return this.id }
    public getName(): string { return this.name; }
    public getEmail(): string { return this.email; }
    public getPassword(): string { return this.password; }
    public getRole(): Role { return this.role; }

}

type Role = 'ADMIN' | 'USER';
interface UserInterface {
    id: number,
    name: string,
    email: string,
    password: string,
    role: Role
    
}

export { UserInterface, Role }