module.exports = function(config){

    config.set({
        singleRun : true,
        basePath : './public/',

        reporters : ['dots', 'junit','coverage'],

        files : [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/AngularJS-Toaster/toaster.js',
            'bower_components/angular-loading-bar/src/loading-bar.js',
            'components/**/*.js',
            'components/**/*.html'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-ng-html2js-preprocessor'
        ],

        preprocessors : {
            'components/**/!(*spec)*.js' : 'coverage',
            'components/**/*.html': 'ng-html2js'
        },

        junitReporter : {
            outputFile: '../test_out/unit.xml',
            suite: 'unit'
        },

        ngHtml2JsPreprocessor: {
            cacheIdFromPath : function(filepath) {
                return filepath;
            },
            stripPrefix: 'components/',
            moduleName: 'templates'
        },

        coverageReporter : {
            type : 'cobertura',
            dir : '../coverage/'
        }
    });
};
