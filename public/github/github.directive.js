(function() {
    'use strict';

    angular
        .module('app')
        .directive('github', Github);

    Github.$inject = ['SmoothScroll'];

    function Github(SmoothScroll) {
        return {
            restrict: 'E',
            templateUrl: 'github/github.html',
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
                SmoothScroll.animate('#user-info');
            };

            this.clearUserRepos = function() {
                $scope.repos = null;
            };
        }
    }

})();
