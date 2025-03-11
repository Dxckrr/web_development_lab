import { Request, Response } from "express";
import ControllerExpressInterface from "../../../express/domain/ControllerExpressInterface";

export default interface FavoriteControllerExpressInterface extends ControllerExpressInterface {
    getFavorites: (req: Request, res: Response) => Promise<void>

}