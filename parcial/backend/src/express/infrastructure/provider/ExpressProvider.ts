import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../../../env/.env") });

export default class ExpressProvider {
    private static instance: ExpressProvider;

    private readonly PORT: string;
    private readonly HOST: string;
    private readonly PROTOCOL: string;

    private constructor() {
        this.PORT = process.env['PORT'] ?? '3000'
        this.HOST = process.env['HOST'] ?? 'localhost'
        this.PROTOCOL = process.env['PROTOCOL'] ?? 'http'
    }

    public static getInstance(): ExpressProvider {
        if (!ExpressProvider.instance) {
            ExpressProvider.instance = new ExpressProvider();
        }
        return ExpressProvider.instance;
    }

    public getHost(): string {
        return this.HOST;
    }

    public getPort(): string {
        return this.PORT;
    }

    public getProtocol(): string {
        return this.PROTOCOL;
    }

    public getAPIDomain(): string {
        return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`;
    }
}
