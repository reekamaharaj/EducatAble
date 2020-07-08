import { Router } from 'express';
import userController from '../../controllers/userController';

export const router = Router();

// Matches with "auth/register" allow user to register
router.route('/register').post(userController.createUser);

// Matches with "auth/login" allow user to login
router.route('/login').post(userController.findUser);
