import Server from "./express/server";
import MovieController from "./movies/controller/movie.controller";
import MovieModel from "./movies/model/movie.model";
import MovieView from "./movies/view/movie.view";

console.log("Hello from movies.ts")
const movieModel = new MovieModel()
const movieView = new MovieView(new MovieController(movieModel));

const server = new Server(movieView);
server.start()