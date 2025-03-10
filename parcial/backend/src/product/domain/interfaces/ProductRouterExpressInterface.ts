import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'

export default interface ProductRouterExpressInterface
  extends RouterExpressInterface {
  getProductRoutes(): void
  getHealthRoutes(): void

}
