import Index from './index/Index.js'
import Movies from './movies/Movies.js'
import Navbar from './navbar/Navbar.js'

const movies = new Movies()
const navbar = new Navbar()
movies.init()
navbar.init()
const index = new Index()
index.init([movies.getMoviesHTML(),navbar.getNavbarHTML()])
