import express, { Application } from "express";
import cors from "cors"
import ExpressProvider from "../provider/ExpressProvider";
import RouterExpressInterface from "../../domain/RouterExpressInterface";
import ErrorExpressRouter from "../router/ErrorExpressRouter";

export default class Server {
    private readonly app: Application  //readonly -> inicializa solo una vez
    constructor(
        private readonly routesExpress: RouterExpressInterface[],
        private readonly errorRoutes : ErrorExpressRouter
    ) {
        this.app = express()
        this.configure()
        this.routes()
        this.middlewares()
    }
    public routes(): void {
        if (this.routesExpress.length === 0) {
            this.app.use(this.errorRoutes.path ,this.errorRoutes.router);
        }
        this.routesExpress.forEach(route => {
            this.app.use(route.path, route.router);
        });
    }
    public configure() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
    private middlewares(): void {
        this.app.use(cors({
            origin: "all",
            credentials: true
        }));
    }
    public start(): void {
        const HOST = ExpressProvider.getHost();
        const PORT = ExpressProvider.getPort();
        const PROTOCOL = ExpressProvider.getProtocol();
        this.app.listen(PORT, () => console.log(`Server running on ${PROTOCOL} ://${HOST}:${PORT}`));
    }
}