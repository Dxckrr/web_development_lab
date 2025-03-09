import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'

export default interface UserRouterExpressInterface
  extends RouterExpressInterface {
    getAuthRoutes(): void
    getUserRoutes(): void
    getHealthRoutes(): void
  }
