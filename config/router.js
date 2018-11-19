
const router = require('express').Router();
const movieController = require('../controllers/movieController');
const userController = require('../controllers/userController');
const secureController = require('../controllers/secureController');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

//zoe's code
router.route('/movies')
  .get(movieController.index)
  .post(secureController, movieController.create);

router.route('/movies/:id')
  .get(movieController.show)
  .put(secureController, movieController.update)
  .delete(secureController, movieController.delete);

//theo's code

router.route('/movies/:id')
  .get(movieController.show);

//fred's code
router.route('/movies')
  .post(movieController.create);

//user show page
router.route('/users/:id')
  .get(secureController, userController.show);

//comment create route
router.route('/movies/:movieId/reviews')
  .post(secureController, reviewController.create);

//comment delete route
router.route('/movies/:movieId/reviews/:reviewId')
  .delete(secureController, reviewController.delete);

// register route
router.route('/register')
  .post(authController.register);
// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
