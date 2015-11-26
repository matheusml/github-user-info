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
                    githubCtrl.updateUser(response.data);
                }).catch(function() {
                    githubCtrl.clearUser();
                });
            }

            function getUserRepos(username) {
                UsersService.getReposByUsername(username).then(function(response) {
                    githubCtrl.updateUserRepos(response.data);
                }).catch(function() {
                    githubCtrl.clearUserRepos();
                });
            }
        }
    }

})();
