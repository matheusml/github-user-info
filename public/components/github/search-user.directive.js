(function() {
    'use strict';

    angular
        .module('app')
        .directive('searchUser', SearchUser);

    SearchUser.$inject = ['UsersService', 'toaster'];

    function SearchUser(UsersService, toaster) {
        return {
            restrict: 'E',
            templateUrl: 'components/github/search-user.html',
            require: '^github',
            scope: {},
            link: linker
        };

        function linker($scope, $element, $attrs, githubCtrl) {
            $scope.$watch('username', function(username) {
                if (username) {
                    getUserInfo(username);
                }
                else {
                    githubCtrl.clearUser();
                }
            });

            function getUserInfo(username) {
                UsersService.getByUsername(username).then(function(response) {
                    getUserRepos(username);
                    githubCtrl.setUser(response.data);
                }).catch(function() {
                    toaster.pop('error', 'Server Error', 'Unable to fetch user\'s data');
                    githubCtrl.clearUser();
                });
            }

            function getUserRepos(username) {
                UsersService.getReposByUsername(username).then(function(response) {
                    githubCtrl.setRepos(response.data);
                }).catch(function() {
                    toaster.pop('error', 'Server Error', 'Unable to fetch user\'s repos');
                    githubCtrl.clearUserRepos();
                });
            }
        }
    }

})();
