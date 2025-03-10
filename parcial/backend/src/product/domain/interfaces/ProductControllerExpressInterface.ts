import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface ProductControllerExpressInterface extends ControllerExpressInterface {
    getAll: (_req: Request, res: Response) => Promise<void>
    getById: (req: Request, res: Response) => Promise<void>
    create: (req: Request, res: Response) => Promise<void>
    update: (req: Request, res: Response) => Promise<void>
    delete: (req: Request, res: Response) => Promise<void>

    getByCategoryId: (req: Request, res: Response) => Promise<void>
    getByPriceRange: (req: Request, res: Response) => Promise<void>
    updateStock: (req: Request , res: Response) => Promise<void>
}
