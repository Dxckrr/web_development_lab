import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import MovieRouterFactory from "./movies/infrastructure/factory/MovieRouterFactory";
const movieFactoryRouter= MovieRouterFactory.create()
const server = ServerFactory.createServer([movieFactoryRouter])
server.start()