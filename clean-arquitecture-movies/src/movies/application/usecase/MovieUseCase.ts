import Movie from '../../domain/movie/Movie'
import NullMovie from '../../domain/movie/NullMovie'
import MoviesServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'
// import MovieResume from '../../domain/movie/MovieResume'
// import NullMovieResume from '../../domain/movie/NullMovieResume'

export default class MovieUseCase implements MovieUseCasePort {
    constructor(private readonly movieService: MoviesServiceInterface) { }
    public async getMovies(): Promise<Movie[]> {
        // TODO: Business logic here
        const movies = await this.movieService.retrieveMovies()
        if (movies.length === 0) {
            return [new NullMovie()]
        }
        return movies
    }
    // public async getMoviesResume(): Promise<MovieResume[]> {
    //     const moviesResume = await this.movieService.retrieveMovieResume()
    //     if (moviesResume.length > 0) {
    //         return [new NullMovieResume()]
    //     }

    //     return moviesResume

    // }
}
