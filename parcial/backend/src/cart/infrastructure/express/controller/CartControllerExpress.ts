import { Request, Response } from "express";
import CartControllerExpressInterface from "../../../domain/interfaces/CartControllerExpressInterface";
import CartUseCasePort from "../../../domain/port/driver/usecase/CartUseCasePort";
export default class CartControllerExpress implements CartControllerExpressInterface {
    constructor(private readonly cartUseCase: CartUseCasePort) { }

    getCartById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const cart = await this.cartUseCase.getCartById(String(id));
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: "Error getting cart", error });
        }
    };

    addItemToCart = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id, product_id, quantity } = req.body
            const cart = await this.cartUseCase.addItemToCart(String(id), String(product_id), quantity);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: "Error adding item to cart", error });
        }
    };

    // createCart = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const cart = await this.cartUseCase.createCart(req.body);
    //         res.status(201).json(cart);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // };

    // getCartTotal = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const total = await this.cartUseCase.getCartTotal(req.params.id);
    //         res.status(200).json({ total });
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // };

    deleteItemFromCart = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const { product_id } = req.body
            const cart = await this.cartUseCase.deleteItemFromCart((String(id)), String(product_id));
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: "Error deleting item to cart", error });
        }
    };

    // increaseCartItemQuantity = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const cart = await this.cartUseCase.increaseCartItemQuantity(req.params.id, req.body.itemId);
    //         res.status(200).json(cart);
    //     } catch (error) {
    //         res.status(500).json({ error });
    //     }
    // };

    // decreaseCartItemQuantity = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const cart = await this.cartUseCase.decreaseCartItemQuantity(req.params.id, req.body.itemId);
    //         res.status(200).json(cart);
    //     } catch (error) {
    //         res.status(500).json({ error });
    //     }
    // };

    // deleteCart = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         await this.cartUseCase.deleteCart(req.params.id);
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(500).json({ error });
    //     }
    // };

    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'Cart Health check active'
        })
    }

}