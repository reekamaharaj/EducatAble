import { Router } from "express";
import userController from "../../controllers/userController";

export const router = Router();

// Matches with "/auth/register"
router.route("/register").post(userController.createUser);
router.route("/login").post(userController.findUser);
router.route("/logout").post(userController.logOut);