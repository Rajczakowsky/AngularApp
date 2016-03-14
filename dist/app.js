(function (){
    'use strict';

    angular.module('testApp', [
        'ui.router',
        'templates'
    ]);

}());
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/_template.html","<div class=\"row\">\n	<div class=\"col-xs-12 text-center\">\n		<span nav-dir></span>\n	</div>\n</div>");
$templateCache.put("home/nav.html","<div>Yes\n<ul class=\"list-inline\">\n    <li ng-repeat=\"filter in home.filters\" ng-click=\"home.select($index)\" ng-class=\"{red: $index == home.selected}\" class=\"list-inline\">\n        <a href=\"#\">{{filter.time}}</a>\n    </li>\n</ul>\n</div>");}]);
(function () {
    'use strict';

    Controller.$inject = ["$scope", "$state"];
    angular
        .module('testApp')
        .controller('HomeController', Controller);

    function Controller ($scope, $state) {
        var home = this;

        home.select = select;

        console.log('controler')
        
        home.filters = [
            {
                'filterId': 1,
                'time': '1',
            },
            {
                'filterId': 2,
                'time': '2',
            },
            {
                'filterId': 3,
                'time': '3',
            },
            {
                'filterId': 4,
                'time': '4',
            },
            {
                'filterId': 5,
                'time': '5',
            }
        ];
        
	    home.selected = 0;

        function select(index) {
	       home.selected = index; 
           console.log('function');
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
(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('navDir', Directive);

    // Element: <div twig-drop-file ></div>
    // Attributes:

    function Directive () {
        var directive = {
            templateUrl: 'home/nav.html',
            replace: true,
            restrict: 'A',
            scope: {
            },
            link: link
        };

        return directive;

        function link (scope, element, attrs) {
        	console.log('boooooo');
        }
    }
}());