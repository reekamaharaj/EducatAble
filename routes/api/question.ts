import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);
router.route('/SavedQuestions').post(controllers.save);
router.route('/UnsavedQuestions').delete(controllers.unsave);


router.route("/SavedQ").get(controllers.findAllSaved);

// router.route('/newQuestion').get(controllers.findNew);

