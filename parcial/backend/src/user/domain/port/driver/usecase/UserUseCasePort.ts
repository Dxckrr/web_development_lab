import User from "../../../user/User";

export default interface UserUseCasePort {
    getAll() : Promise<User[]>
    getById(id: string) : Promise<User>
}
