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
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const product = await this.productUseCase.getProductById(String(id));
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error getting product", error });
        }
    }
    async getByName(req: Request, res: Response): Promise<void> {
        try {
            const { q } = req.query
            const product = await this.productUseCase.getProductsByName(String(q));
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error getting product", error });
        }
    }

    async getByCategoryId(req: Request, res: Response): Promise<void> {
        try {
            const { categoryId } = req.params
            const products = await this.productUseCase.getProductsByCategoryId(String(categoryId));
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving products", error });
        }
    }

    async getByPriceRange(req: Request, res: Response): Promise<void> {
        try {
            const { minPrice, maxPrice } = req.query;
            if (minPrice === undefined || maxPrice === undefined || isNaN(Number(minPrice)) || isNaN(Number(maxPrice))) {
                res.status(400).json({ message: "Both minPrice and maxPrice must be valid numbers." });
                return;
            }
            const min = Number(minPrice);
            const max = Number(maxPrice);
            if (min > max) {
                res.status(400).json({ message: "Min price must be less than max price." });
                return;
            }
            const products = await this.productUseCase.getProductsByPriceRange(min, max);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving products", error });
        }
    }
    async create(req: Request, res: Response): Promise<void> {
        await this.productUseCase.addProduct(req.body)
        res.status(201).json({ message: 'Product created successfully' });
    }

    async update(_req: Request, res: Response): Promise<void> {
        res.status(501).json({ message: "Method not implemented." });
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const deleted = await this.productUseCase.deleteProduct(String(id));
            if (deleted) res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: "Error deleting product", error });
        }
    }
    async updateStock(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            const { quantity } = req.body
            if (id === null ||
                id === undefined ||
                quantity === undefined ||
                quantity === 0 ||
                quantity === null) {
                res.status(404).json({ message: "Action not allowed" })
                return;
            }
            const productUpdated = await this.productUseCase.updateStock(String(id), Number(quantity));
            if (productUpdated) res.status(200).json(productUpdated);
        } catch (error) {
            res.status(500).json({ message: "Error deleting product", error });
        }
    }
    async getImage(req: Request, res: Response): Promise<void> {
        const { filename } = req.params;
        if (filename === undefined || filename === null) {
            res.status(400).json({ message: "Filename parameter is required" });
            return;
        }
        const image = this.productUseCase.getImage(filename)
        if (image === "") {
            res.status(404).json({ message: "Image not found" });
            return;
        }
        res.sendFile(image);
    };
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'Product Health check active'
        })
    }
}
