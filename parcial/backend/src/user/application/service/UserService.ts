import UserRepositoryPort from "../../domain/port/driven/UserRepositoryPort"
import UserServicePort from "../../domain/port/driver/service/UserServicePort"
import NullUser from "../../domain/user/NullUser"
import User from "../../domain/user/User"
import GetterUser from "../../infrastructure/helpers/GetterUser"

export default class UserService implements UserServicePort {
    constructor(
        private readonly userRepository: UserRepositoryPort
    ) {

    }
    public getAll = async (): Promise<User[]> => {
        const users = await this.userRepository.findAll()
        return users.map((user) => GetterUser.get(user))
    }
    public getById = async (id: string): Promise<User> => {
        if(id === undefined || id === null) {
            return Promise.resolve(new NullUser())
        }
        const user = await this.userRepository.findById(id)
        if(user === undefined || user === null){
            return Promise.resolve(new NullUser())
        }
        return GetterUser.get(user)
    }
    

}



