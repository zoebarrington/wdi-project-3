//
const router = require('express').Router();


const movieController = require('../controllers/movieController');


//zoe's code




//theo's code

router.route('/movies/:id')
  .get(movieController.show);
   
//fred's code



module.exports = router;
