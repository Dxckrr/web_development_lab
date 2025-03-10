import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import ProductRouterFactory from "./product/infrastructure/factory/ProductRouterFactory";
import UserRouterFactory from "./user/infrastructure/factory/UserRouterFactory";

const userRouter = UserRouterFactory.create()
const productRouter = ProductRouterFactory.create()
const server = ServerFactory.createServer(
    [
        userRouter,
        productRouter
    ]
)
server.start()