import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);
router.route('/SavedQuestions').post(controllers.save);
router.route('/UnsavedQuestions').post(controllers.unsave);
router.route('/saveQCheck/').post(controllers.saveQCheck);


router.route("/SavedQ").post(controllers.findAllSaved);

// router.route('/newQuestion').get(controllers.findNew);

