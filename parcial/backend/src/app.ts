import ServerFactory from "./express/infrastructure/factory/ServerFactory";
import UserRouterFactory from "./user/infrastructure/factory/UserRouterFactory";

const userRouter = UserRouterFactory.create()
const server = ServerFactory.createServer(
    [
        userRouter
    ]
)
server.start()