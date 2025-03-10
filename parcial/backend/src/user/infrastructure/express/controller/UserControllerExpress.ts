import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../domain/interfaces/UserControllerExpressInterface";
import UserUseCasePort from "../../../domain/port/driver/usecase/UserUseCasePort";
export default class UserControllerExpress implements UserControllerExpressInterface {

    constructor(
        private readonly userUseCasePort: UserUseCasePort,
    ) { }
    async create(req: Request, res: Response): Promise<void> {
        try {
            const newUser = await this.userUseCasePort.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
        res.status(201).json({ message: 'User created successfully' });
    }
    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userUseCasePort.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await this.userUseCasePort.getUserById(String(id));
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedUser = await this.userUseCasePort.updateUser(String(id), req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await this.userUseCasePort.deleteUser(String(id));
            if (deleted) res.status(200).json('User deleted successfully');
        } catch (error) {
            res.status(500).json({ error: 'Server failed' })
        }
    }
    async healthCheck(_req: Request, res: Response): Promise<void> {
        res.status(200).json({
            message: 'User Health check active'
        })
    }
}