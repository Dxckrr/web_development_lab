import Subject from '../../shared/types/Subject.js'
import Movie from '../types/Movie.js'
import NullMovie from '../types/NullMovie.js'
import MoviesView from '../view/MoviesView.js'

export default class MoviesModel extends Subject<MoviesView> {
  private moviesData: Movie[]

  constructor() {
    super()
    this.moviesData = [NullMovie]
  }

  readonly init = async () => {
    this.moviesData = await this.loadData()
    this.notifyALL()
  }

  readonly getMoviesData = () => {
    return this.moviesData
  }

  readonly loadData = async (): Promise<Movie[]> => {
    const response = await fetch('./database/movies-2020s.json')
    if (!response.ok || response.status !== 200) {
      return [NullMovie]
    }
    return await response.json()
  }
  readonly searchMovies = (searchTerm: string): void => {
    const searchTermLower = searchTerm.toLowerCase()
    this.moviesData = 
    this.moviesData.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(searchTermLower)
      )
    })
  }
}
