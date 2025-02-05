import movies_json from "../../../database/movies-2020s.json"
import Movie from "../types/Movie"
export default class MovieModel {
    public retreiveMovies(): Movie[] {
        return movies_json as Movie[];
    }
}