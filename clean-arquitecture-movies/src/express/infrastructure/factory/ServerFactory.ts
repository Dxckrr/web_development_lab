import RouterExpressInterface from "../../domain/RouterExpressInterface";
import ErrorExpressController from "../controller/ErrorExpressController";
import ErrorExpressRouter from "../router/ErrorExpressRouter";
import Server from "../server/Server";

export default class ServerFactory {
    public static readonly createServer = (routes: RouterExpressInterface[]): Server => {
        const errorController = new ErrorExpressController()
        const errorRouter = new ErrorExpressRouter(errorController)
        const server = new Server(
            routes,
            errorRouter
        )
        return server
    }
}