import { Router } from 'express';
import User from './src/app/models/User';
import SessionController from './src/app/controllers/SessionControllers';
import authMiddlware from './src/app/middlewares/auth';
import RecipientControllers from './src/app/controllers/RecipientControllers';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/recipients', authMiddlware, RecipientControllers.store);
routes.put('/recipients/:id', authMiddlware, RecipientControllers.update);

export default routes;
