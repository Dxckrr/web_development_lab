import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface UserControllerExpressInterface extends ControllerExpressInterface {
    login : (req: Request, res: Response) => Promise<void>

}
