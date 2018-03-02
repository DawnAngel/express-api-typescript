import { Router } from 'express';
import { baseRouter } from './view/BaseRouter';

class ViewRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.use('/', baseRouter);
  }
}

const routes = new ViewRouter();

export const viewRouter = routes.router;
