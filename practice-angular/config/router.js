const movieController = ('../controllers/movieController');

router.route('/movie')
  .get(movieController.index)
