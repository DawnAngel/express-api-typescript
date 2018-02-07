import { Router } from 'express';
import PostRouter from './api/PostRouter';
import UserRouter from './api/UserRouter';

class ApiRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  // set up our routes
  public routes() {
    this.router.use('/posts', PostRouter);
    this.router.use('/users', UserRouter);
  }

}

const apiRoutes = new ApiRouter();

export default apiRoutes.router;
