(function() {
    'use strict';

    angular
        .module('app')
        .directive('github', Github);

    function Github() {
        return {
            restrict: 'E',
            templateUrl: 'components/github/github.html',
            scope: {},
            controller: controller
        };

        function controller($scope) {
            this.setUser = function(data) {
                $scope.user = data;
            }

            this.clearUser = function() {
                $scope.user = null;
            };

            this.setRepos = function(data) {
                $scope.repos = data;
            };

            this.clearUserRepos = function() {
                $scope.repos = null;
            };
        }
    }

})();
