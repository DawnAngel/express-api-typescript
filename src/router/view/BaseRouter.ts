import { Request, Response, Router } from 'express';

class BaseRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public get(req: Request, res: Response): void {
    res.render('pages/index');
  }

  // set up our routes
  public routes() {
    this.router.get('/', this.get);
  }
}

const routes = new BaseRouter();

export const baseRouter = routes.router;
