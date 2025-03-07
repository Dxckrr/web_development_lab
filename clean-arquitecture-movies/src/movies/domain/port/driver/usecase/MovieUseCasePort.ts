import Movie from "../../../movie/Movie";
// import MovieResume from "../../../movie/MovieResume";

export default interface MovieUseCasePort {
  getMovies(): Promise<Movie[]>
  // getMoviesResume(): Promise<MovieResume[]>
}
