import { Router } from 'express';
import FavoriteRouterExpressInterface from '../../../domain/interfaces/FavoriteRouterExpressInterface';
import FavoriteControllerExpressInterface from '../../../domain/interfaces/FavoriteControllerExpressInterface';
export default class FavoriteRouterExpress implements FavoriteRouterExpressInterface {
    public router: Router;
    public path: string;

    constructor(private readonly controllerFavorite: FavoriteControllerExpressInterface) {
        this.router = Router();
        this.path = '/favorite';
        this.routes();
    }

    public routes(): void {
        this.getFavoriteRoutes();
        this.getHealthRoutes();
    }

    public getFavoriteRoutes(): void {
        this.router.get('/all/:id', this.controllerFavorite.getFavorites.bind(this.controllerFavorite));
    }
    public getHealthRoutes(): void {
        this.router.get('/health/favorites', this.controllerFavorite.healthCheck.bind(this.controllerFavorite));
    }
}
