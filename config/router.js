const router = require('express').Router();
const movieController = require('../controllers/movieController');
const userController = require('../controllers/userController');
const secureController = require('../controllers/secureController');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');
const secureRoute = secureController.secure;

router.route('/movies')
  .get(movieController.index)
  .post(secureRoute, movieController.create);

router.route('/movies/:id')
  .get(movieController.show)
  .put(secureRoute, movieController.update)
  .delete(secureRoute, movieController.delete);

router.route('/movies/:id')
  .get(movieController.show);

//news feed
router.route('/feed')
  .get(secureRoute, userController.feed);


router.route('/movies')
  .post(movieController.create);

//user show page
router.route('/users/:id')
  .get(secureRoute, userController.show)
  .put(secureRoute, userController.updateFollowers);

//review create route
router.route('/movies/:movieId/reviews')
  .post(secureRoute, reviewController.create);

//review delete route
router.route('/movies/:movieId/reviews/:reviewId')
  .delete(secureRoute, reviewController.delete);

//review update route
router.route('/movies/:movieId/reviews/:reviewId')
  .put(secureRoute, reviewController.update);

// register route
router.route('/register')
  .post(authController.register);
// login route
router.route('/login')
  .post(authController.login);

module.exports = router;
