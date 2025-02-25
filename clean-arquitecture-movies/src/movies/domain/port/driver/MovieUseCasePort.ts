import Movie from "../../director/Director"

export default interface MovieUseCasePort {
    getMovies(): Movie[]
}
