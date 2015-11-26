(function() {
    'use strict';

    angular
        .module('app')
        .directive('searchUser', SearchUser);

    SearchUser.$inject = ['UsersService'];

    function SearchUser(UsersService) {
        return {
            restrict: 'E',
            templateUrl: 'github/search-user.html',
            scope: {},
            link: linker
        };

        function linker($scope, $element, $attrs) {
            $scope.$watch('username', function(username) {
                if (username) {
                    getUserInfo(username);
                }
            });
        }

        function getUserInfo(username) {
            UsersService.getByUsername(username).then(function(response) {
                console.log(response);
            }).catch(function() {
                // insert toaster
            });
        }
    }

})();
