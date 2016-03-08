(function () {
    'use strict';

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