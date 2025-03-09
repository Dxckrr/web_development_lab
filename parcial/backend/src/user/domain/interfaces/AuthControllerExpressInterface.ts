import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface AuthControllerExpressInterface extends ControllerExpressInterface {
    login : (req: Request, res: Response) => Promise<void>
    register: (req: Request, res: Response) => Promise<void>
}
