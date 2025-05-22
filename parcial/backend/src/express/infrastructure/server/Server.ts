import express, { Application } from "express";
import cors from "cors"
import ExpressProvider from "../provider/ExpressProvider";
import RouterExpressInterface from "../../domain/RouterExpressInterface";
import ErrorExpressRouter from "../error/router/ErrorExpressRouter";

export default class Server {
    private readonly app: Application  //readonly -> inicializa solo una vez
    constructor(
        private readonly routesExpress: RouterExpressInterface[],
        private readonly errorRoutes: ErrorExpressRouter
    ) {
        this.app = express()
        this.configure()
        this.middlewares()
        this.routes()
    }
    public routes(): void {
        this.routesExpress.forEach((route) => {
            console.log(route.path)
            this.app.use(route.path, route.router)
        })

        this.app.use(this.errorRoutes.path, this.errorRoutes.router)
    }
    public configure() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
    private middlewares(): void {
        this.app.use(cors({
            origin: 'http://127.0.0.1:5500',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type'],
            credentials: true
        }));
        this.app.options('*', cors()); 
    }

    public start(): void {
        const HOST = ExpressProvider.getInstance().getHost();
        const PORT = ExpressProvider.getInstance().getPort();
        const PROTOCOL = ExpressProvider.getInstance().getProtocol();
        this.app.listen(PORT, () => console.log(`Server running on ${PROTOCOL}://${HOST}:${PORT}`));
    }
}