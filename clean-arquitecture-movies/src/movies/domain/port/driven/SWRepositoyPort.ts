import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Movie from "../../movie/Movie";
import MovieResume from "../../movie/MovieResume";

export default interface SWMovieRepositoryPort extends RepositoryInterface<string, Movie> {
    getSWMovieByTitle: (title: string) => Promise<Movie>;
}

export interface SWMovieResumeRepositoryPort extends RepositoryInterface<string, MovieResume> {
    getSWMovieResumeByTitle: (title: string) => Promise<MovieResume>;
}
