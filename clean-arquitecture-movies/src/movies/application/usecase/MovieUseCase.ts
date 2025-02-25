import NullMovie from "../../domain/director/NullDirector";
import Movie from "../../domain/movie/Movie";
import MovieUseCasePort from "../../domain/port/driver/MovieUseCasePort";

export default class MovieUseCase implements MovieUseCasePort {
    public getmovies(): Movie[] {
        const movies = [
            new NullMovie()
        ]
        return movies
    }
}

