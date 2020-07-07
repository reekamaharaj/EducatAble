import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);
router.route('/SavedQuestions/:email/:qid').post(controllers.save);
router.route('/UnsavedQuestions/:email/:qid').post(controllers.unsave);


// Matches with "/api/savedquestion/:id"
router.route("/SavedQ").get(controllers.findAllSaved);
router.route('/saveQ/:email/:qid').post(controllers.saveQ);
router.route('/unsaveQ/:email/:qid').post(controllers.unsaveQ);

// router.route('/newQuestion').get(controllers.findNew);

