import { Router } from "express";
import RouterExpressInterface from "../../../domain/RouterExpressInterface";
import ErrorExpressControllerInterface from "../../../domain/ErrorExpressControllerInterace";

export default class ErrorExpressRouter implements RouterExpressInterface {
    path: string;
    router: Router;
    constructor(
        private readonly errorController: ErrorExpressControllerInterface
    ){
        this.router = Router();
        this.path = '*';
        this.routes()
    }
    public routes() {
        this.router.use('*',this.errorController.error.bind(this.errorController))
    }
}