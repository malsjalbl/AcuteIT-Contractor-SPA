export function manRouterConfig ($stateProvider, $urlRouterProvider) {

  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('manufacturers', {

      templateUrl:  'app/modules/manufacturer/manufacturers.html',
      controller:   'ManufacturerList as manListCtrl'
    })

    .state('/manufacturers/:manufacturerId', {

      templateUrl: 'static/app/contract/contract-detail-view.html',
      controller:  'contractDetailController'
    })
}
