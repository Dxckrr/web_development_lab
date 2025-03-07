import SWMovieInterface from '../../domain/sw_api/SWMovieInterface'
import SWCharacterInterface from '../../domain/sw_api/SWCharacterInterface'
import SWApiInterface from '../../domain/interfaces/SWApiInterface'

export default class SWAPI implements SWApiInterface {
  private readonly uriFilms = 'https://swapi.dev/api/films/'

  public fetchSWMovies = async (): Promise<SWMovieInterface[]> => {
    let films: SWMovieInterface[] = []
    const response = await fetch(this.uriFilms)
    const data = await response.json()

    if (data === undefined || data === null) {
      return Promise.reject(new Error('No data found'))
    }

    films = data.results.map((film: SWMovieInterface) => {
      return {
        title: film.title,
        release_date: film.release_date,
        opening_crawl: film.opening_crawl,
        director: film.director,
        producer: film.producer,
        characters: film.characters,
      }
    })

    if (films.length === 0) {
      return Promise.reject(new Error('No movies found'))
    }

    return films
  }

  public fetchSWMovieCharacters = async (
    swMovie: SWMovieInterface
  ): Promise<SWCharacterInterface[]> => {
    const characters = swMovie.characters.map(
      async (url: string): Promise<SWCharacterInterface> => {
        const response = await fetch(url)
        if (response.ok === false) {
          return {
            name: 'No data found',
            birthYear: 'No data found',
          }
        }
        const data = await response.json()
        return {
          name: data.name,
          birthYear: data.birth_year,
        }
      }
    )

    return Promise.all(characters)
  }
}
