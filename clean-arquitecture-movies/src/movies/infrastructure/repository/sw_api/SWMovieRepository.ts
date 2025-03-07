import SWApiInterface from "../../../../api_sw/domain/interfaces/SWApiInterface";
import Movie from "../../../domain/movie/Movie";
import NullMovie from "../../../domain/movie/NullMovie";
import SWMovieRepositoryPort from "../../../domain/port/driven/SWRepositoyPort";
import FilmsToMovies from "./helpers/SwMovie_To_Movie";

export default class SWMovieRepository implements SWMovieRepositoryPort {
    constructor(private readonly swapi: SWApiInterface,
        private readonly filmsToMovies: FilmsToMovies,
    ) {
    }

    findAll = async (): Promise<Movie[]> => {
        const films = await this.swapi.fetchSWMovies()
        if (films === undefined || films === null) {
            return [];
        }
        const movies = await this.filmsToMovies.get(films)
        if (movies === undefined && movies === null) {
            return []
        }
        return movies
    };
    findById = (_id: string): Promise<Movie> => {
        return Promise.resolve(new NullMovie())
    };
    save = (_item: Movie): Promise<Movie> => {
        return Promise.resolve(new NullMovie())
    };
    update = (_id: string, _item: Movie): Promise<boolean | Movie> => {
        return Promise.resolve(false)
    };
    patch = (_id: string, _item: Partial<Movie>): Promise<Movie> => {
        return Promise.resolve(new NullMovie())
    };
    getSWMovieByTitle = (_title: string): Promise<Movie> => {
        return Promise.resolve(new NullMovie())
    };
}