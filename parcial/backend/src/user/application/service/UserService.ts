import UserRepositoryPort from "../../domain/port/driven/UserRepositoryPort"
import UserServicePort from "../../domain/port/driver/service/UserServicePort"
import { UserInterface } from "../../domain/user/AbstractUser"
import { RegisterUserInterface } from "../../domain/user/auth/AbstractRegisterUser"
import NullUser from "../../domain/user/NullUser"
import User from "../../domain/user/User"
import GetterUser from "../../infrastructure/helpers/GetterUser"

export default class UserService implements UserServicePort {
    constructor(
        private readonly userRepository: UserRepositoryPort
    ) { }

    public createUser = async (user: RegisterUserInterface): Promise<User | null> => {
        const newUser = await this.userRepository.create(user)
        if (newUser === undefined || newUser === null) {
            return Promise.resolve(new NullUser())
        }
        return GetterUser.get(newUser)
    }
    public getAllUsers = async (): Promise<User[]> => {
        const users = await this.userRepository.findAll()
        return users.map((user) => GetterUser.get(user))
    }
    public getUserById = async (id: string): Promise<User> => {
        if (id === undefined || id === null) {
            return Promise.resolve(new NullUser())
        }
        const user = await this.userRepository.findById(id)
        if (user === undefined || user === null) {
            return Promise.resolve(new NullUser())
        }
        return GetterUser.get(user)
    }
    public updateUser = async (id: string, item: Partial<UserInterface>): Promise<User | boolean> => {
        if ((id === undefined || id === null) || Object.keys(item).length === 0) {
            return false;
        }
        const success = await this.userRepository.update(id, item);
        if (!success) {
            return false;
        }

        return this.getUserById(id);
    }
    public deleteUser = async (id: string): Promise<boolean> => {
        if (id === undefined || id === null) {
            return false;
        }
        return await this.userRepository.delete(id);
    }
}



