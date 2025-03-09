import bcrypt from "bcrypt";
import PasswordSecurityInterface from "../../domain/PasswordSecurityInterface";

export default class PasswordSecurity implements PasswordSecurityInterface {
    private static readonly SALT_ROUNDS = 10;

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, PasswordSecurity.SALT_ROUNDS);
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
