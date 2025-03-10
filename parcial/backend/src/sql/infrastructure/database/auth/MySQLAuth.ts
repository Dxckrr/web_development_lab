import RegisterUser from "../../../../user/domain/user/auth/RegisterUser";
import NullUser from "../../../../user/domain/user/NullUser";
import User from "../../../../user/domain/user/User";
import MySQLAuthInterface from "../../../domain/interfaces/auth/MySQLAuthInterface";

export default class MySQLAuth implements MySQLAuthInterface {
    logout(_user: User): Promise<void> {
        return Promise.resolve()
    }
    register = async (_user: RegisterUser): Promise<User> => {
        return Promise.resolve(new NullUser())
    };

}