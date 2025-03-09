import User from "../../../user/User";

export default interface UserServicePort {
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>

}