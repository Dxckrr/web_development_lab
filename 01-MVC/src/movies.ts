import Server from './express/server'
import MovieFactory from './movies/factory/movie.factory'
import UserFactory from './users/factory/user.factory'

const movieView = MovieFactory.createMovieView()

const userView = UserFactory.createUserView()

const server = new Server(movieView, userView)
server.start()