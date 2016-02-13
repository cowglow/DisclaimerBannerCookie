'use strict';

/**
 * @ngdoc function
 * @name disclaimerCookieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the disclaimerCookieApp
 */
angular.module('disclaimerCookieApp')
    .controller('MainCtrl', function (DisclaimerCookie) {
        DisclaimerCookie.initialize();
    });
