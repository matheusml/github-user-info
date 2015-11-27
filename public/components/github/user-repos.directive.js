(function() {
    'use strict';

    angular
        .module('app')
        .directive('userRepos', UserRepos);

    function UserRepos() {
        return {
            restrict: 'E',
            templateUrl: 'components/github/user-repos.html',
            scope: {
                repos: '='
            }
        };
    }

})();
