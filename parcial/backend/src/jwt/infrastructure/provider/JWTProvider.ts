import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../../../env/.env") });

export default class JWTProvider {
    private static instance: JWTProvider;

    private readonly TOKEN_SECRET: string;

    private constructor() {
        this.TOKEN_SECRET = process.env["TOKEN_SECRET"] ?? this.throwError("TOKEN_SECRET");
    }

    public static getInstance(): JWTProvider {
        if (!JWTProvider.instance) {
            JWTProvider.instance = new JWTProvider();
        }
        return JWTProvider.instance;
    }
    public getTokenSecret(): string {
        return this.TOKEN_SECRET;
    }
    private throwError(variable: string): never {
        throw new Error(`Environment variable: ${variable} not found`);
    }
}
