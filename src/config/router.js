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
      controller: moviesIndexCtrl
    })
    .state('movieShow', {
      templateUrl: './views/movies/show.html',
      controller: moviesShowCtrl
    });
  $urlRouterProvider.otherwise('/');
}


export default Router;
