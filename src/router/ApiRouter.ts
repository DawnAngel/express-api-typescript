import { Router } from 'express';
import { postRouter } from './api/PostRouter';
import { userRouter } from './api/UserRouter';

class ApiRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  // set up our routes
  public routes() {
    this.router.use('/posts', postRouter);
    this.router.use('/users', userRouter);
  }
}

const routes = new ApiRouter();

export const apiRouter = routes.router;
