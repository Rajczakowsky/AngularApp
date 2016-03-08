(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('HomeController', Controller);

    function Controller (PageTitlesFactory, $scope, $state, Spreadsheet) {
        var home = this;
        console.log('test');
    }
}());