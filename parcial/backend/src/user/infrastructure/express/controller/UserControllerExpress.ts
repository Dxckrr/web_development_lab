import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../domain/interfaces/UserControllerExpressInterface";
import AuthUseCasePort from "../../../domain/port/driver/usecase/auth/AuthUseCase";


export default class UserControllerExpress implements UserControllerExpressInterface {

    constructor(
        private readonly authUseCasePort: AuthUseCasePort,
    ) { }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body
            const user = await this.authUseCasePort.login(email, password)
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ error: 'Server failed' })
        }

    }
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'User/Auth Health check active'
        })
    }
}