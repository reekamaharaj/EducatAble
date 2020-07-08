import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// get all saved questions and displays on FAQ
router.route('/question').get(controllers.findAll);

// send user question to db for admin review
router.route('/newQuestion').post(controllers.create);

// checks user's save favs to set fav btn status
router.route('/saveQCheck').post(controllers.saveQCheck);

// save question to user's favs
router.route('/SavedQuestions').post(controllers.save);

// deletes question from user's favs
router.route('/UnsavedQuestions').post(controllers.unsave);

// gets all user's saved questions and displays on Fav page
router.route("/SavedQ").post(controllers.findAllSaved);

// gets all new questions and displays for adming review
router.route('/newQuestion').get(controllers.findNew);

