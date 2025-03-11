import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'

export default interface CartRouterInterface
  extends RouterExpressInterface {
  getCartRoutes(): void
  getHealthRoutes(): void

}
