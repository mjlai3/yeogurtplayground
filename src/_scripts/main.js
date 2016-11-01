// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'slick-carousel';
import 'foundation-sites';
import 'foundation-sites/js/foundation.util.mediaQuery.js';
import angular from 'angular';

import Link from '../_modules/link/link';

$(() => {
	new Link(); // Activate Link modules logic
	console.log('Welcome to Yeogurt!');

	$('.foo').slick(); // Activates slick plugin

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['Application']);
	});

	var application = angular.module('Application', []);

	application.controller('ApplicationController', function($scope){

	});

	application.directive('navigation', function($http){
		return{
			restrict: 'E',
			scope: {
				endpoint: '@'
			},
			link: function($scope){
				$scope.test = 'This is a test string'
				
				$http.get($scope.endpoint).then(function (response) {
					$scope.store = response.data;

					angular.forEach($scope.store, function (value, id) {
						if (value.side == "left") {
							$scope.leftItems.push(value);
						} else { 
							$scope.rightItems.push(value);
						}
					})
				});
			}
		}
	})
});

