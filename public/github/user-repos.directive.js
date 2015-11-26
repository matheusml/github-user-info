(function() {
    'use strict';

    angular
        .module('app')
        .directive('userRepos', UserRepos);

    function UserRepos() {
        return {
            restrict: 'E',
            templateUrl: 'github/user-repos.html',
            scope: {
                repos: '='
            }
        };
    }

})();
