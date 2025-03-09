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
            const { user, token } = await this.authUseCasePort.login(email, password)

            res.cookie('token', token);
            res.status(200).header('auth-token', token).json(user);
        } catch (error) {
            res.status(400).json({ error: 'Server failed' })
        }

    }
    async register(req: Request, res: Response): Promise<void> {
        try {
            const newUser = await this.authUseCasePort.register(req.body);
            res.status(201).json(newUser);
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