import { Router } from "express";
import controllers from "../../controllers/controllers";

export const router = Router();

// Matches with "/api/question"
router.route("/").get(controllers.findAll).post(controllers.create);

// Matches with "/api/question/:id"
router
    .route("/:id")
    .get(controllers.findById)
    .put(controllers.update)
    .delete(controllers.remove);
