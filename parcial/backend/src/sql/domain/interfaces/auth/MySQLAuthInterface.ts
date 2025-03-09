export default interface MySQLAuthInterface {
    login(username: string, password: string): Promise<string | null>;
    logout(token: string): Promise<void>;
    register(username: string, password: string): Promise<string | null>;
    verifyToken(token: string): Promise<string | null>;
}