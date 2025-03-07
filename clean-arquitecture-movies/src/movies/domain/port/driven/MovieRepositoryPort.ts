import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Movie from "../../movie/Movie";
import MovieResume from "../../movie/MovieResume";

export default interface MovieRepositoryPort extends RepositoryInterface<string, Movie> {
    getSWMovieByTitle: (title: string) => Promise<Movie>;
}

export interface MovieResumeRepositoryPort extends RepositoryInterface<string, MovieResume> {
    getMovieResumeByTitle: (title: string) => Promise<MovieResume>
}