import { Router } from "express";

export default interface RouterExpressInterface {
    path: string;
    router : Router;

    routes():void
}