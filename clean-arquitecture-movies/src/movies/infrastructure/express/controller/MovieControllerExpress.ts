import { Request, Response } from "express";
import MovieControllerExpressInterface from "../../../domain/interfaces/MovieControllerExpressInterface";
import MovieUseCasePort from "../../../domain/port/driver/MovieUseCasePort";
import MovieToJson from "./helpers/MovieToJson";

export default class MovieControllerExpress implements MovieControllerExpressInterface {
    constructor(private readonly movieUseCasePort: MovieUseCasePort) {

    }

    getMovies(_req: Request, res: Response): void {
        const movies = this.movieUseCasePort.getMovies();
        console.log(movies)
        const movies_json = MovieToJson.moviesToJson(movies)

        if(movies_json.length === 0) {
            res.status(404).send("err")
            return
        }
        res.status(200).json(movies_json)

    }
    // getMovieById(req: Request, res: Response): void {
    //     throw new Error("Method not implemented.");
    // }

}
