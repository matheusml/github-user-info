(function() {
    'use strict';

    angular
        .module('app')
        .directive('github', Github);

    function Github() {
        return {
            restrict: 'E',
            templateUrl: 'github/github.html',
            scope: {}
        };
    }

})();
