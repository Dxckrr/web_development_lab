import MovieController from "../controller/movie.controller";
import MovieModel from "../model/movie.model";
import MovieView from "../view/movie.view";

export default class MovieFactory {
    public static createMovieView(): MovieView {
        const movieModel = new MovieModel()
        const movieController = new MovieController(movieModel);
        return new MovieView(movieController)
    }
}