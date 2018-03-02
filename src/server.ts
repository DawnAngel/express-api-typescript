import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as ejs from 'ejs';

import { apiRouter }from './router/ApiRouter';
import { viewRouter } from './router/ViewRouter';

class Server {
  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  
  // application config
  public config(): void {

    const MONGO_URI: string = 'mongodb://localhost/tes'; 
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI);

    // express view engine
    this.app.engine('ejs', ejs.renderFile);
    this.app.set('view engine', 'ejs');
    this.app.set('views', __dirname + '/views');

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    // cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
    
  }

  // application routes
  public routes(): void {
    this.app.use('/', viewRouter);
    this.app.use('/api/v1', apiRouter);
  }
}

// export
export default new Server().app;