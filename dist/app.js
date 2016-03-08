var testApp = angular.module('testApp', ['ui.router']);
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/_template.html","<div><h1>boooooo </h1></div>");}]);
(function () {
    'use strict';

    Controller.$inject = ["PageTitlesFactory", "$scope", "$state", "Spreadsheet"];
    angular
        .module('testApp')
        .controller('HomeController', Controller);

    function Controller (PageTitlesFactory, $scope, $state, Spreadsheet) {
        var home = this;
        console.log('test');
    }
}());
(function () {
    'use strict';

    Route.$inject = ["$stateProvider", "$urlRouterProvider"];
    angular
        .module('testApp')
        .config(Route);

    function Route($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/_template.html',
                resolve: {},
                controller: 'HomeController as home'
            });
    }
}());