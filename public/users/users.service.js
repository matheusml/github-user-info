(function() {
    'use strict';

    angular
        .module('app')
        .service('UsersService', UsersService);

    UsersService.$inject = ['$http', 'API'];

    function UsersService($http, API) {
        this.getByUsername = function(username) {
            return $http.get(API.baseUrl + 'users/' + username);
        };
    }

})();
