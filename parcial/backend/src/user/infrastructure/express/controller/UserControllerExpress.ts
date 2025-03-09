import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../domain/interfaces/UserControllerExpressInterface";
import UserLoginPort from "../../../domain/port/driver/usecase/auth/AuthUseCase";


export default class UserControllerExpress implements UserControllerExpressInterface {

    constructor(
        private readonly loginUseCase: UserLoginPort,
    ) { }

    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body
        console.log(email , password)
        const user = await this.loginUseCase.login(email, password)
        res.status(200).json(user)
    }
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'User/Auth Health check active'
        })
    }
}