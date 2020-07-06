import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);
router.route('/SavedQuestions/:email/:qid').post(controllers.save);
router.route('/UnsavedQuestions/:email/:qid').post(controllers.unsave);


// Matches with "/api/question/:id"
// router.route("/FAQ/:id").get(controllers.findById);
// router.route("/FAQ/:id").put(controllers.update);
// router.route("/FAQ/:id").delete(controllers.remove);
