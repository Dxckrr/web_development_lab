import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'
import SWMovieRepositoryPort from '../../domain/port/driven/SWRepositoyPort'
// import MovieRepositoryPort from '../../domain/port/driven/MovieRepositoryPort'

export default class MovieService implements MovieServiceInterface {
  constructor(
    // private readonly movieRepository: MovieRepositoryPort,
    private readonly swMovieRepository: SWMovieRepositoryPort
  ) { }

  public retrieveMovies = async (): Promise<Movie[]> => {
    return await this.swMovieRepository.findAll()
  }
}
