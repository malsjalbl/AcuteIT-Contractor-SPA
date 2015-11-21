
// App imports
import {AppController}  from './app-controller';
import {AppService}     from './app-services';
import {appRouteConfig} from './app-route';
import {appRunBlock}    from './app-run';

// Module imports
import {appHomeModule}      from './modules/home/home-module';
import {appSecurityModule}  from './modules/security/security-module';

angular.module('app', [ 'ngAnimate',
                        'ngCookies',
                        'ngTouch',
                        'ngSanitize',
                        'ngMessages',
                        'ngAria',
                        'ui.router',
                         appHomeModule.name,
                         appSecurityModule.name ])

  .controller('AppController', AppController)
  .service('AppService', AppService)
  .service('SecurityService', appSecurityModule.SecurityService)
  .config(appRouteConfig)
  .run(appRunBlock);
