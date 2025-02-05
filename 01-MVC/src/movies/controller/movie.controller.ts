import { Request, Response } from "express"
import MovieModel from "../model/movie.model"
export default class MovieController {
    constructor(private readonly movieModel : MovieModel){}
    public getMovies(_req: Request, res: Response): void {
        res.status(200).json({
            movies: this.movieModel.retreiveMovies(),

        })
    }
}