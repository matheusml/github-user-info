describe('github directive', function() {
    var scope, element, ctrl, isolateScope;

    beforeEach(module('app', 'templates'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element = '<github></github>';
        element = $compile(element)(scope);

        scope.$digest();

        ctrl = element.controller('github');

        isolateScope = element.isolateScope();
    }));

    describe('setUser', function() {
        beforeEach(function() {
            ctrl.setUser({user: {name: 'name'}});
        });

        it('updates the user', function() {
            expect(isolateScope.user).toEqual({user: {name: 'name'}});
        });
    });

    describe('clearUser', function() {
        beforeEach(function() {
            ctrl.clearUser();
        });

        it('updates the user', function() {
            expect(isolateScope.user).toBe(null);
        });
    });

    describe('setRepos', function() {
        beforeEach(function() {
            ctrl.setRepos({repos: [1,2,3]});
        });

        it('updates repos', function() {
            expect(isolateScope.repos).toEqual({repos: [1,2,3]});
        });
    });

    describe('clearRepos', function() {
        beforeEach(function() {
            ctrl.clearRepos();
        });

        it('updates repos', function() {
            expect(isolateScope.repos).toBe(null);
        });
    });
});
