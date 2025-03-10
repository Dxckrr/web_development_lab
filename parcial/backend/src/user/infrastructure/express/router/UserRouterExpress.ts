import { Router } from 'express';
import UserRouterExpressInterface from '../../../domain/interfaces/UserRouterExpressInterface';
import UserControllerExpressInterface from '../../../domain/interfaces/UserControllerExpressInterface';
import AuthControllerExpressInterface from '../../../domain/interfaces/AuthControllerExpressInterface';
export default class UserRouterExpress implements UserRouterExpressInterface {
  public router: Router;
  public path: string;

  constructor(private readonly controllerUser: UserControllerExpressInterface,
    private readonly controllerAuth : AuthControllerExpressInterface
  ) {
    this.router = Router();
    this.path = '/user';
    this.routes();
  }

  public routes(): void {
    this.getAuthRoutes();
    this.getUserRoutes();
    this.getHealthRoutes();
  }

  public getAuthRoutes(): void {
    this.router.post('/login', this.controllerAuth.login.bind(this.controllerAuth));
    this.router.post('/register', this.controllerAuth.register.bind(this.controllerAuth));
  }

  public getUserRoutes(): void {
    this.router.post('/create', this.controllerUser.create.bind(this.controllerUser)); 
    this.router.get('/all', this.controllerUser.getAll.bind(this.controllerUser));
    this.router.get('/:id', this.controllerUser.getById.bind(this.controllerUser));
    this.router.put('/:id', this.controllerUser.update.bind(this.controllerUser));
    this.router.delete('/:id', this.controllerUser.delete.bind(this.controllerUser));

  }

  public getHealthRoutes(): void {
    this.router.get('/health/auth', this.controllerAuth.healthCheck.bind(this.controllerAuth));
    this.router.get('/health/user', this.controllerUser.healthCheck.bind(this.controllerUser));
  }
}
