import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface ProductControllerExpressInterface extends ControllerExpressInterface {
    getAll: (_req: Request, res: Response) => Promise<void>
    getById: (req: Request, res: Response) => Promise<void>
    create: (req: Request, res: Response) => Promise<void>
    update: (req: Request, res: Response) => Promise<void>
    delete: (req: Request, res: Response) => Promise<void>

    getByCategory: (req: Request, res: Response) => Promise<void>
    getBetweenPrice: (req: Request, res: Response) => Promise<void>
}
