import express, { Application } from "express";
import cors from "cors"
import Environment from "../shared/environment";
import ContactView from "../contact/view/contact.view";

export default class Server {
    private readonly app: Application  //readonly -> inicializa solo una vez
    constructor(
        private readonly contactView: ContactView,
        // private readonly userView: UserView
    ) {
        this.app = express()
        this.configure()
        this.routes()
        this.middlewares()
    }
    public routes(): void {
        this.app.use('/api/v1.0/contact', this.contactView.router)
        // this.app.use('/api/v1.0/users', this.userView.router)
    }
    public configure() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
      }
    private middlewares(): void {
        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));
    }
    public start(): void {
        const HOST = Environment.getHost();
        const PORT = Environment.getPort();
        const PROTOCOL = Environment.getProtocol();
        this.app.listen(PORT, () => console.log(`Server running on ${PROTOCOL} ://${HOST}:${PORT}`));
    }
}