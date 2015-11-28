describe('user-info directive', function() {
    var scope, element, ctrl, isolateScope, SmoothScrollMock;

    beforeEach(module('app', 'templates'));

    beforeEach(inject(function($rootScope, $compile, SmoothScroll) {
        scope = $rootScope.$new();

        SmoothScrollMock = SmoothScroll;

        spyOn(SmoothScrollMock, 'animate').and.callThrough();

        element = '<user-info user="user" repos="repos"></user-info>';
        element = $compile(element)(scope);

        scope.$digest();

        isolateScope = element.isolateScope();
    }));

    describe('linker', function() {
        describe('when repos is undefined', function() {
            it('doesnt invoke smooth scroll', function() {
                expect(SmoothScrollMock.animate).not.toHaveBeenCalled();
            });
        });

        describe('when repos is defined', function() {
            it('invokes smooth scroll', function() {
                scope.repos = [1,2,3];
                scope.$apply();
                expect(SmoothScrollMock.animate).toHaveBeenCalledWith('#user-info');
            });
        });
    });
});
