import { Request, Response } from "express";
import FavoriteControllerExpressInterface from "../../../domain/interfaces/FavoriteControllerExpressInterface";
import FavoriteUseCasePort from "../../../domain/port/driver/usecase/FavoriteUseCasePort";
export default class FavoriteControllerExpress implements FavoriteControllerExpressInterface {

    constructor(
        private readonly favoriteUseCase: FavoriteUseCasePort,
    ) { }
    async getFavorites(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const favorites = await this.favoriteUseCase.getFavoritesByUser(String(id))
            if (favorites) {
                res.json(favorites)
            }
        } catch (error) {
            res.status(400).json({ error: 'Getting favorites failed' });
        }

    }

    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'Favorites Health check active'
        })
    }
}