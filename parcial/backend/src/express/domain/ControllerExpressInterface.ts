import { Request, Response } from "express";
export default interface ControllerExpressInterface {
    healthCheck: (_req: Request, res: Response) => void;
}
