import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface CartControllerInterface extends ControllerExpressInterface {
    getCartById: (req: Request, res: Response) => Promise<void>
    addItemToCart: (req: Request, res: Response) => Promise<void>
    // createCart: (req: Request, res: Response) => Promise<void>
    // getCartTotal: (req: Request, res: Response) => Promise<void>
    deleteItemFromCart: (req: Request, res: Response) => Promise<void>
    // increaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    // decreaseCartItemQuantity: (req: Request, res: Response) => Promise<void>
    // deleteCart: (req: Request, res: Response) => Promise<void>
}
