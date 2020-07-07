import * as path from 'path';
import { Router } from 'express';
import { router as questionRouter } from './api/question';
import { router as userRouter } from './auth/user';

export const routes = Router();

// API Routes
routes.use('/api', questionRouter);
routes.use('/auth', userRouter);

// If no API routes are hit, send the React app
routes.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
