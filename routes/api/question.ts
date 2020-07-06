import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);

// Matches with "/api/savedquestion/:id"
router.route("/SavedQ").get(controllers.findAllSaved);
router.route('/SavedQ').post(controllers.saveQ);
router.route('/SavedQ').post(controllers.unsaveQ);
