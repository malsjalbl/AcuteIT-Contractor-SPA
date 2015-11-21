/**
 * Created by mike on 05/11/2015.
 */
export function securityRouteConfig ($routeProvider) {

  'ngInject';

  $routeProvider

    .when('/manufacturers', {

      templateUrl:  'app/modules/manufacturer/manufacturer.html',
      controller:   'ManufacturerList',
      controllerAs: 'manufacturer-list'
    })

    .when('/manufacturers/:manufacturerId', {

      templateUrl: 'static/app/contract/contract-detail-view.html',
      controller:  'contractDetailController',
      controllerAs: 'manufacturer-detail'

    })
}
