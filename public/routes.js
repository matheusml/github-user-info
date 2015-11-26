(function() {
    'use strict';

    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/index.html',
            })
            .when('/about', {
                templateUrl: 'home/about.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
