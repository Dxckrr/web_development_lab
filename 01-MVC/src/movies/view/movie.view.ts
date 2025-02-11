import { Router } from "express"
import MovieController from "../controller/movie.controller"
export default class MovieView {
    router: Router
    constructor(private readonly movieController: MovieController) {
        this.router = Router()
        this.routes()
    }
    public routes(): void {
        this.router.get('/movies',
            this.movieController.getMovies.bind(this.movieController)
        )
        this.router.get(
            '/movie/image/:name',
            this.movieController.getMovieImage.bind(this.movieController)
        )
    }
}