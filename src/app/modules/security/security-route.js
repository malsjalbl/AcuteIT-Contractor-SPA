/**
 * Created by mike on 05/11/2015.
 */
export function securityRouteConfig ($stateProvider) {

  'ngInject';

  $stateProvider

    .state('login', {

      url:'/login',
      templateUrl: 'app/modules/security/login.html',
      controller: 'LoginController as loginCtrl'
    })
}
