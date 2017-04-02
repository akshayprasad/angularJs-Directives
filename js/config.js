(function() {
    'use strict';

    angular
        .module('myApp')
        .config(function($stateProvider, $urlRouterProvider) {

              $urlRouterProvider.otherwise('/Home');  
              $stateProvider
                    .state('Home', {
                        url: '/Home',
                        templateUrl: 'modules/home/home.html',
                        controller: 'homeCtrl'
                    })
                //     
        })
            // .run(function($rootScope, $state, $stateParams) {
            //     $rootScope.$state = $state;
            //     $rootScope.$stateParams = $stateParams;
            // });
})();
