import { Request, Response } from "express";
import ErrorExpressControllerInterface from "../../../domain/ErrorExpressControllerInterace";
export default class ErrorExpressController
    implements ErrorExpressControllerInterface {
    public error = (_req: Request, res: Response) => {
        res.status(400).json({
            error: "Path not found"
        })
    }
}