import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface UserControllerExpressInterface extends ControllerExpressInterface {
    getAll: (_req: Request, res: Response) => Promise<void>
    getById: (_req: Request, res: Response) => Promise<void>
    update: (req: Request, res: Response) => Promise<void>
    delete: (req: Request, res: Response) => Promise<void>

}
