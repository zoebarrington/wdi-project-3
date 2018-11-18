import moviesIndexCtrl from '../controllers/movies/indexCtrl';
import moviesShowCtrl from '../controllers/movies/showCtrl';
import moviesNewCtrl from '../controllers/movies/newCtrl';
import moviesEditCtrl from '../controllers/movies/editCtrl';


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
    })
    .state('movieNew', {
      templateUrl: './views/movies/new.html',
      url: '/movies/new',
      controller: moviesNewCtrl
    })
    .state('movieEdit', {
      templateUrl: './views/movies/edit.html',
      url: '/movies/:id/edit',
      controller: moviesEditCtrl
    });
  $urlRouterProvider.otherwise('/');
}


export default Router;
