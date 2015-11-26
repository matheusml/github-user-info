(function() {
    'use strict';

    angular
        .module('app')
        .directive('userInfo', UserInfo);

    function UserInfo() {
        return {
            restrict: 'E',
            templateUrl: 'github/user-info.html',
            scope: {
                user: '='
            }
        };
    }

})();
