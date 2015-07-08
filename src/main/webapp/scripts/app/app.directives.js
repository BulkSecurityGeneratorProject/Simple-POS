'use strict';

angular.module('posApp')
	.directive('numberFormat', ['$filter', 'Utils', 'Constants', 
		function($filter, Utils, Constants) {
	  	return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	            // by default the values will come in as undefined so we need to setup a
	            // watch to notify us when the value changes
	            scope.$watch(attrs.numberFormat, function(value) {
	                if (!Utils.isUndefinedOrNull(value) && angular.isNumber(value)) {
	                	if (Utils.isInt(value)) {
	                		element.text($filter('number')(value, 0));
	                	} else if (Utils.isFloat(value)) {
	                		element.text($filter('number')(value, Constants.fractionSize));
	                	}
	                }
	            });
	        }
	    };		
	}]);