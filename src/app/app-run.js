/**
 * Created by mike on 08/11/2015.
 */

export function appRunBlock ($log, $rootScope, securityService) {

  'ngInject';

  $log.debug('Applying settings...');
  securityService.setAuthenticated(true);

  /*$rootScope.$on('$stateChangeStart',

    function (event) {

      if (securityService.getAuthenticated() == false) {
        $log.debug('Not authenticated...');
        event.preventDefault();
      }
      // transitionTo() promise will be rejected with
      // a 'transition prevented' error
    })*/
}
