import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../../../env/.env') });
export default class ExpressProvider {
    private static instance: ExpressProvider
    private static PORT: string
    private static HOST: string
    private static PROTOCOL: string


    private constructor() {
        ExpressProvider.PORT = process.env['PORT'] ?? '3000'
        ExpressProvider.HOST = process.env['HOST'] ?? 'localhost'
        ExpressProvider.PROTOCOL = process.env['PROTOCOL'] ?? 'http'
    }
    public static getInstance(): ExpressProvider {
        if (this.instance === null || this.instance === undefined) {
            ExpressProvider.instance = new ExpressProvider()
        }
        return ExpressProvider.instance
    }
    public static getHost(): string {
        ExpressProvider.getInstance()
        return ExpressProvider.HOST
    }
    public static getPort(): string {
        ExpressProvider.getInstance()
        return ExpressProvider.PORT
    }
    public static getProtocol(): string {
        ExpressProvider.getInstance()
        return ExpressProvider.PROTOCOL
    }
    public static getAPIDomain(): string {
        ExpressProvider.getInstance()
        return `${ExpressProvider.PROTOCOL}://${ExpressProvider.HOST}:${ExpressProvider.PORT}`
    }
}