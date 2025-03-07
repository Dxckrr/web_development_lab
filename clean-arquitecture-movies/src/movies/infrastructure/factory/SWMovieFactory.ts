import SWAPI from "../../../api_sw/infrastructure/api/sw_api";
import SWMovieRepositoryPort from "../../domain/port/driven/SWRepositoyPort";
import GetterCharacters from "../repository/sw_api/helpers/GetterCharacters";
import GetterDirector from "../repository/sw_api/helpers/GetterDirector";
import GetterProducers from "../repository/sw_api/helpers/GetterProducers";
import FilmsToMovies from "../repository/sw_api/helpers/SwMovie_To_Movie";
import SWMovieRepository from "../repository/sw_api/SWMovieRepository";

export default class SWRepositoryFactory {
    public static create(): SWMovieRepositoryPort {
        const swapi = new SWAPI();
        const getterDirector = new GetterDirector();
        const getterProducer = new GetterProducers();
        const getterCharacters = new GetterCharacters(swapi);
        const filmsToMovies = new FilmsToMovies(
            getterDirector,
            getterProducer,
            getterCharacters
        )

        return new SWMovieRepository(swapi, filmsToMovies);
    }
}