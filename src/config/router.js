import moviesIndexCtrl from '../controllers/movies/indexCtrl';
import moviesShowCtrl from '../controllers/movies/showCtrl';


function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('movieIndex', {
      templateUrl: './views/movies/index.html',
      url: '/movies',
      controller: moviesIndexCtrl
    })
    .state('movieShow', {
      templateUrl: './views/movies/show.html',
      url: '/movies/:id',
      controller: moviesShowCtrl
    });
  $urlRouterProvider.otherwise('/');
}


export default Router;
