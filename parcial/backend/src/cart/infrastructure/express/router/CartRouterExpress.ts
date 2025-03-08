import { Router } from 'express'
import MovieControllerExpressInterface from '../../../domain/interfaces/CartControllerExpressInterface'
import ProductRouterExpressInterface from '../../../domain/interfaces/CartRouterExpressInterface'

export default class ProductRouterExpress implements ProductRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly controller: MovieControllerExpressInterface) {
    this.router = Router()
    this.path = '/cart'
    this.routes()
  }

  public routes(): void {
  }
}
