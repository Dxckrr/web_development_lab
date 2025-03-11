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
    this.getCartRoutes()
    this.getHealthRoutes()
  }
  public getCartRoutes(): void {
    // this.router.post('/add', this.controller.addItemToCart.bind(this.controller))
    // this.router.post('/create', this.controller.createCart.bind(this.controller))
    // this.router.get('/total', this.controller.getCartTotal.bind(this.controller))
    this.router.get('/:id', this.controller.getCartById.bind(this.controller))
    // this.router.put('/:id/quantity/increase', this.controller.increaseCartItemQuantity.bind(this.controller))
    // this.router.put('/:id/quantity/decrease', this.controller.decreaseCartItemQuantity.bind(this.controller))
    // this.router.delete('/cart/:id', this.controller.deleteCart.bind(this.controller))
    // this.router.delete('/item/:id', this.controller.deleteItemFromCart.bind(this.controller))
  }
  public getHealthRoutes(): void {
    this.router.get('/health/cart', this.controller.healthCheck.bind(this.controller))
  }
}
