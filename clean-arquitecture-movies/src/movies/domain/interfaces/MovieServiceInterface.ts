import Movie from "../movie/Movie";
// import MovieResume from "../movie/MovieResume";

export default interface MoviesServiceInterface {
    retrieveMovies(): Promise<Movie[]>
    // retrieveMovieResume(): Promise<MovieResume[]>

}