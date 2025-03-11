import CartRouterFactory from "./cart/infrastructure/factory/CartRouterFactory";
import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import FavoriteRouterFactory from "./favorites/infrastructure/factory/FavoriteRouterFactory";
import ProductRouterFactory from "./product/infrastructure/factory/ProductRouterFactory";
import UserRouterFactory from "./user/infrastructure/factory/UserRouterFactory";

const userRouter = UserRouterFactory.create()
const productRouter = ProductRouterFactory.create()
const cartRouter = CartRouterFactory.create()
const favoriteRouter = FavoriteRouterFactory.create()
const server = ServerFactory.createServer(
    [
        userRouter,
        productRouter,
        cartRouter,
        favoriteRouter
    ]
)
server.start()