(function() {
    'use strict';

    angular
        .module('app')
        .directive('github', Github);

    function Github() {
        return {
            restrict: 'E',
            templateUrl: 'github/github.html',
            scope: true,
            controller: controller
        };

        function controller($scope) {
            this.updateUser = function(data) {
                $scope.user = data;
            }

            this.clearUser = function() {
                $scope.user = null;
            };

            this.updateUserRepos = function(data) {
                $scope.repos = data;
            };

            this.clearUserRepos = function() {
                $scope.repos = null;
            };
        }
    }

})();
