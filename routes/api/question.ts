import { Router } from 'express';
import controllers from '../../controllers/controllers';
import { auth } from '../../controllers/auth';

export const router = Router();

// get all saved questions and displays on FAQ
router.route('/question').get(controllers.findAll);

// send user question to db for admin review
router.post('/newQuestion', auth, controllers.create);

// checks user's save favs to set fav btn status
router.post('/saveQCheck', auth, controllers.saveQCheck);

// save question to user's favs
router.post('/SavedQuestions', auth, controllers.save);

// deletes question from user's favs
router.post('/UnsavedQuestions', auth, controllers.unsave);

// gets all user's saved questions and displays on Fav page
router.post("/SavedQ", auth, controllers.findAllSaved);

// gets all new questions and displays for admin review
router.post('/newQuestion', auth, controllers.findNew);

