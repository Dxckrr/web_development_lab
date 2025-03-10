import { Router } from 'express'
import ProductRouterExpressInterface from '../../../domain/interfaces/ProductRouterExpressInterface'
import ProductControllerExpressInterface from '../../../domain/interfaces/ProductControllerExpressInterface'

export default class ProductRouterExpress implements ProductRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly controller: ProductControllerExpressInterface) {
    this.router = Router()
    this.path = '/products'
    this.routes()
  }

  public routes(): void {
    this.getProductRoutes()
    this.getHealthRoutes()
  }
  public getProductRoutes(): void {
    this.router.post('/create', this.controller.create.bind(this.controller))

    this.router.get('/all', this.controller.getAll.bind(this.controller))
    this.router.get('/:id', this.controller.getById.bind(this.controller))
    this.router.get('/category/:categoryId', this.controller.getByCategoryId.bind(this.controller))
    this.router.get('/product/price', this.controller.getByPriceRange.bind(this.controller))

    this.router.put('/:id', this.controller.update.bind(this.controller))
    this.router.put('/stock/:id/:quantity', this.controller.updateStock.bind(this.controller))

    this.router.delete('/:id', this.controller.delete.bind(this.controller))

  }
  public getHealthRoutes(): void {
    this.router.get('/health/product', this.controller.healthCheck.bind(this.controller))
  }

}
