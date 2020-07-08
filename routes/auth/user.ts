import { Router } from 'express';
import userController from '../../controllers/userController';

export const router = Router();

// Allows user to login
router.route('/login').post(userController.findUser);

// Allows user to register
router.route('/register').post(userController.createUser);
