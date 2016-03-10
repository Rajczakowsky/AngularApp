(function () {
    'use strict';

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