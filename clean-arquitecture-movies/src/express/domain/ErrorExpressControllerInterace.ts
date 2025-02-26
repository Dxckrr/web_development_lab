import { Request, Response } from "express";
export default interface ErrorExpressControllerInterface {
    error: (_req: Request, res: Response) => void
}