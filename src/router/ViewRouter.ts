import { Router } from 'express';
// import PostRouter from './view/PostRouter';
// import UserRouter from './view/UserRouter';

class ViewRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    // this.router.use('/', IndexRouter);
    // this.router.use('/posts', PostRouter);
    // this.router.use('/users', UserRouter);
  }

}

const viewRoutes = new ViewRouter();

export default viewRoutes.router;
