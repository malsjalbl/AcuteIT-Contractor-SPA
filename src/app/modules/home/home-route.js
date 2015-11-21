/**
 * Created by mike on 05/11/2015.
 */
export function homeRouteConfig($stateProvider) {

  'ngInject';

  $stateProvider

    .state('home', {

      url:'/home',
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController as homeCtrl'
    })
}
