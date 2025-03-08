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

    this.router.get('/health', this.controller.healthCheck.bind(this.controller))
    // this.router.get('/', this.controller.getAllUsers.bind(this.controller))
    // this.router.get('/:id', this.controller.getUserById.bind(this.controller))
    // this.router.put('/:id', this.controller.updateUser.bind(this.controller))
    // this.router.delete('/:id', this.controller.deleteUser.bind(this.controller))
  }
}
