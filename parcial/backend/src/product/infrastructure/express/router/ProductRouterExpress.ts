import { Router } from 'express'
import MovieControllerExpressInterface from '../../../domain/interfaces/ProductControllerExpressInterface'
import ProductRouterExpressInterface from '../../../domain/interfaces/ProductRouterExpressInterface'

export default class ProductRouterExpress implements ProductRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly controller: MovieControllerExpressInterface) {
    this.router = Router()
    this.path = '/products'
    this.routes()
  }

  public routes(): void {
  }
}
