import SWCharacterInterface from "../sw_api/SWCharacterInterface";
import SWMovieInterface from "../sw_api/SWMovieInterface";

export default interface SWApiInterface {
    fetchSWMovies(): Promise<SWMovieInterface[]>
    fetchSWMovieCharacters(SWMovieInterface: SWMovieInterface): Promise<SWCharacterInterface[]>
}