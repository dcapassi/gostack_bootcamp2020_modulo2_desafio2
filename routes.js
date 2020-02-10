import { Router } from 'express';
import User from './src/app/models/User';
import SessionController from './src/app/controllers/SessionControllers';

import authMiddlware from './src/app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.send({ message: 'Hello World' }));
routes.post('/sessions', SessionController.store);

export default routes;
