(function() {
    'use strict';

    angular
        .module('app')
        .directive('autofocus', Autofocus);

    Autofocus.$inject = ['$timeout'];

    function Autofocus($timeout) {
        return {
            restrict: 'A',
            link: linker
        };

        function linker($scope, $element, $attrs) {
            $timeout(function() {
                $element[0].focus();
            });
        }
    }

})();
