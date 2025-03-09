


import { Request, Response } from "express";
import AuthUseCasePort from "../../../domain/port/driver/usecase/auth/AuthUseCase";
import AuthControllerExpressInterface from "../../../domain/interfaces/AuthControllerExpressInterface";

export default class AuthControllerExpress implements AuthControllerExpressInterface {

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
    async register(_req: Request, res: Response): Promise<void> {
        try {
            res.send("OK")
            // const { email, password } = req.body;
            // const newUser = await this.authUseCasePort.register(email, password);
            // res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: 'Registration failed' });
        }
    };

    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'User/Auth Health check active'
        })
    }
}