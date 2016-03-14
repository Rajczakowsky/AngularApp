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