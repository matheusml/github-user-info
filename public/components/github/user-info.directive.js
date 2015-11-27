(function() {
    'use strict';

    angular
        .module('app')
        .directive('userInfo', UserInfo);

    UserInfo.$inject = ['SmoothScroll'];

    function UserInfo(SmoothScroll) {
        return {
            restrict: 'E',
            templateUrl: 'components/github/user-info.html',
            scope: {
                user: '=',
                repos: '='
            },
            link: linker
        };

        function linker($scope, $element, $attrs) {
            $scope.$watch('repos', function(repos) {
                if (repos) {
                    SmoothScroll.animate('#user-info');
                }
            });
        }
    }

})();
