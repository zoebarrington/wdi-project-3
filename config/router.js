//
const router = require('express').Router();
const movieController = require('../controllers/movieController');
const userController = require('../controllers/userController');


//zoe's code
router.route('/movies')
  .get(movieController.index)
  .post(movieController.create);

router.route('/movies/:id')
  .get(movieController.show)
  .put(movieController.update)
  .delete(movieController.delete);

//theo's code

router.route('/movies/:id')
  .get(movieController.show);

//fred's code
router.route('/movies')
  .post(movieController.create);

//user show page
router.route('/users/:id')
  .get(userController.show);


module.exports = router;
