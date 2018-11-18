//
const router = require('express').Router();
const movieController = require('../controllers/movieController');


//zoe's code




//theo's code



//fred's code
router.route('/movies')
  .post(movieController.create);


module.exports = router;
