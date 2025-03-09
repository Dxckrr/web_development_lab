import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../domain/interfaces/UserControllerExpressInterface";
import UserUseCasePort from "../../../domain/port/driver/usecase/UserUseCasePort";

export default class UserControllerExpress implements UserControllerExpressInterface {

    constructor(
        private readonly userUseCasePort: UserUseCasePort,
    ) { }
    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userUseCasePort.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            const user = await this.userUseCasePort.getById(String(id));
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async update(_req: Request, _res: Response): Promise<void> {
    }
    async delete(_req: Request, _res: Response): Promise<void> {
    }
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'User/Auth Health check active'
        })
    }
}