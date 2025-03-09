export default interface JWTInterface {
    generateToken(payload: object): string;
    verifyToken(token: string): object | null;
}
