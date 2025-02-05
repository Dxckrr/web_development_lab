import express, { Application } from "express";
import MovieView from "../movies/view/movie.view";
// import cors from "cors"

export default class Server {
    private readonly app: Application  //readonly -> inicializa solo una vez
    constructor(private readonly movieView: MovieView) {
        this.app = express()
        this.routes()
        this.middlewares()
    }
    public routes(): void {
        this.app.use('/', this.movieView.router)
    }
    private middlewares(): void {
        // this.app.use(cors({
        //     origin: 'http://localhost:3000',
        //     credentials: true
        // }));
    }

    public start(): void {
        const PORT = process.env['PORT'] ?? 3000
        const HOST = process.env['HOST'] ?? 'localhost'
        const PROTOCOL = process.env['PROTOCOL'] ?? 'http'
        this.app.listen(PORT, () => console.log(`Server running on ${PROTOCOL} ://${HOST}:${PORT}`));
    }
}