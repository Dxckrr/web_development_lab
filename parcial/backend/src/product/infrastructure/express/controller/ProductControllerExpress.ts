import { Request, Response } from "express";
import ProductControllerExpressInterface from "../../../domain/interfaces/ProductControllerExpressInterface";
import ProductUseCasePort from "../../../domain/port/driver/usecase/ProductUseCase";

export default class ProductController implements ProductControllerExpressInterface {
    constructor(private readonly productUseCase: ProductUseCasePort) { }

    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productUseCase.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving products", error });
        }
    }
    async getById(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async create(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async update(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async delete(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async getByCategory(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async getBetweenPrice(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'Product Health check active'
        })
    }
}
