(function() {
    'use strict';

    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/index.html',
            })
            .when('/about', {
                templateUrl: 'components/home/about.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
