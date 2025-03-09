export default interface PasswordSecurityInterface {
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
}
