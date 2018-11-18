//
const router = require('express').Router();


const movieController = require('../controllers/movieController');


//zoe's code
router.route('/movies')
  .get(movieController.index);




//theo's code



//fred's code



module.exports = router;
