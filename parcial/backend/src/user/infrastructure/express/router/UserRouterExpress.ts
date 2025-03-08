import { Router } from 'express'
import UserRouterExpressInterface from '../../../domain/interfaces/UserRouterExpressInterface'
import UserControllerExpressInterface from '../../../domain/interfaces/UserControllerExpressInterface'
export default class UserRouterExpress implements UserRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly controller: UserControllerExpressInterface) {
    this.router = Router()
    this.path = '/user'
    this.routes()
  }

  public routes(): void {
  }
}
