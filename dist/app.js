(function (){
    'use strict';

    angular.module('testApp', [
        'ui.router',
        'templates'
    ]);

}());
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/_template.html","<ul>\n    <li ng-repeat=\"filter in home.filters\" ng-click=\"home.select($index)\" ng-class=\"{red: $index == home.selected}\" class=\"list-inline\">\n        {{filter.time}}\n    </li>\n</ul>");}]);
(function () {
    'use strict';

    Controller.$inject = ["$scope", "$state"];
    angular
        .module('testApp')
        .controller('HomeController', Controller);

    function Controller ($scope, $state) {
        var home = this;

        console.log('controler')
        
        home.filters = [
            {
                'filterId': 1,
                'time': 'last 24 hours',
            },
            {
                'filterId': 2,
                'time': 'all',
            },
            {
                'filterId': 3,
                'time': 'last hour',
            },
            {
                'filterId': 4,
                'time': 'today',
            },
            {
                'filterId': 5,
                'time': 'yersteday',
            }
        ];
        
	    home.selected = 0;

	    home.select= function(index) {
	       home.selected = index; 
	    };
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