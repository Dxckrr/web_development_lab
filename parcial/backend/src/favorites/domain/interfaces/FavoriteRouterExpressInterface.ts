import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";

export default interface FavoriteRouterExpressInterface extends RouterExpressInterface {
    getFavoriteRoutes(): void;
    getHealthRoutes(): void;
}