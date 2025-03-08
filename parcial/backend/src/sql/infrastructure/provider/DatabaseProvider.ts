import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../../../env/.env") });

export default class DatabaseProvider {
    private static instance: DatabaseProvider;
    
    private readonly DB_HOST: string;
    private readonly DB_PORT: string;
    private readonly DB_USER: string;
    private readonly DB_PWD: string;
    private readonly DB_NAME: string;

    private constructor() {
        this.DB_HOST = process.env["DB_HOST"] ?? this.throwError("DB_HOST");
        this.DB_PORT = process.env["DB_PORT"] ?? this.throwError("DB_PORT");
        this.DB_USER = process.env["DB_USER"] ?? this.throwError("DB_USER");
        this.DB_PWD = process.env["DB_PWD"] ?? this.throwError("DB_PWD");
        this.DB_NAME = process.env["DB_NAME"] ?? this.throwError("DB_NAME");
    }

    public static getInstance(): DatabaseProvider {
        if (!DatabaseProvider.instance) {
            DatabaseProvider.instance = new DatabaseProvider();
        }
        return DatabaseProvider.instance;
    }
    public getDBHost(): string {
        return this.DB_HOST;
    }

    public getDBPort(): number {
        return Number(this.DB_PORT);
    }

    public getDBUser(): string {
        return this.DB_USER;
    }

    public getDBPassword(): string {
        return this.DB_PWD;
    }

    public getDBName(): string {
        return this.DB_NAME;
    }

    public getDBConnectionUrl(): string {
        return `mysql://${this.DB_USER}:${this.DB_PWD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_NAME}`;
    }
    private throwError(variable: string): never {
        throw new Error(`Environment variable: ${variable} not found`);
    }
}
