(function() {
    'use strict';

    angular
        .module('app')
        .factory('SmoothScroll', SmoothScroll);

    SmoothScroll.$inject = ['$timeout'];

    function SmoothScroll($timeout) {
        return {
            animate: animate
        };

        function animate(elementId) {
            $timeout(function() {
                var element = $(elementId);
                if (element && element.offset()) {
                    var offset = element.offset().top;
                    $('html,body').animate({scrollTop: element.offset().top}, 'slow');
                }
            }, 300);
        };
    }
})();
