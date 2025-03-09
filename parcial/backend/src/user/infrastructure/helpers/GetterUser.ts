import { UserInterface } from "../../domain/user/AbstractUser";
import User from "../../domain/user/User";

export default class GetterUser {
    public static get = (json: UserInterface): User => {
        return new User({
            id: json.id,
            names: json.names,
            surnames: json.surnames,
            email: json.email,
            password: json.password,
            role: json.role,
            creation_date: json.creation_date,
        });
    }

}