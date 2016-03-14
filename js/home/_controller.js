(function () {
    'use strict';

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