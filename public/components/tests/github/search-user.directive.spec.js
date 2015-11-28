describe('search-user directive', function() {
    var scope, isolateScope, element, defGetByUsername, defGetReposByUsername, GithubCtrl, UsersServiceMock, toasterMock;

    beforeEach(module('app', 'templates'));

    beforeEach(inject(function($rootScope, $compile, $q, UsersService, toaster) {
        defGetByUsername = $q.defer();
        defGetReposByUsername = $q.defer();

        scope = $rootScope.$new();

        UsersServiceMock = UsersService;
        toasterMock = toaster;

        spyOn(toaster, 'pop').and.callThrough();

        spyOn(UsersServiceMock, 'getByUsername').and.callFake(function() {
            return defGetByUsername.promise;
        });

        spyOn(UsersServiceMock, 'getReposByUsername').and.callFake(function() {
            return defGetReposByUsername.promise;
        });

        GithubCtrl = {
            setUser: function() {},
            clearUser: function() {},
            setRepos: function() {},
            clearRepos: function() {}
        };

        spyOn(GithubCtrl, 'setUser').and.callThrough();
        spyOn(GithubCtrl, 'clearUser').and.callThrough();
        spyOn(GithubCtrl, 'setRepos').and.callThrough();
        spyOn(GithubCtrl, 'clearRepos').and.callThrough();

        element = angular.element('<search-user></search-user>');
        element.data('$githubController', GithubCtrl);
        element = $compile(element)(scope);

        scope.$digest();

        isolateScope = element.isolateScope();
    }));

    describe('linker', function() {
        describe('when username is undefined', function() {
            it('invokes githubCtrl clearUser', function() {
                expect(GithubCtrl.clearUser).toHaveBeenCalledWith();
            });
        });

        describe('when username is defined', function() {
            beforeEach(function() {
                isolateScope.username = 'username';
                isolateScope.$apply();
            });

            it('invokes UsersService getByUsername', function() {
                expect(UsersServiceMock.getByUsername).toHaveBeenCalledWith('username');
            });

            describe('when the promise is rejected', function() {
                beforeEach(function() {
                    defGetByUsername.reject();
                    isolateScope.$apply();
                });

                it('invokes toaster pop', function() {
                    expect(toasterMock.pop).toHaveBeenCalledWith('error', 'Server Error', 'Unable to fetch user\'s data');
                });

                it('invokes githubCtrl clearUser', function() {
                    expect(GithubCtrl.clearUser).toHaveBeenCalledWith();
                });
            });

            describe('when the promise is solved', function() {
                beforeEach(function() {
                    defGetByUsername.resolve({data: {user: {}}});
                    isolateScope.$apply();
                });

                it('invokes githubCtrl setUser', function() {
                    expect(GithubCtrl.setUser).toHaveBeenCalledWith({user: {}});
                });

                it('invokes UsersService getReposByUsername', function() {
                    expect(UsersServiceMock.getReposByUsername).toHaveBeenCalledWith('username');
                });

                describe('when the promise is rejected', function() {
                    beforeEach(function() {
                        defGetReposByUsername.reject();
                        isolateScope.$apply();
                    });

                    it('invokes toaster pop', function() {
                        expect(toasterMock.pop).toHaveBeenCalledWith('error', 'Server Error', 'Unable to fetch user\'s repos');
                    });

                    it('invokes githubCtrl clearRepos', function() {
                        expect(GithubCtrl.clearRepos).toHaveBeenCalledWith();
                    });
                });

                describe('when the promise is solved', function() {
                    beforeEach(function() {
                        defGetReposByUsername.resolve({data: {repos: []}});
                        isolateScope.$apply();
                    });

                    it('invokes githubCtrl setRepos', function() {
                        expect(GithubCtrl.setRepos).toHaveBeenCalledWith({repos: []});
                    });
                });
            });
        });
    });
});
