/*jshint esversion: 6 */
// requires: plugins.js


var rm = rm || {};
/* global FastClick, document */

rm.general = (function () {
	'use strict';

	var init = function () {
		console.log('Working');

		let test = [1,2,3];

		test.map(x => console.log('this' + x) );

	};

	// return public api
	return {
		init: init
	};


}());
/* global rm:false, window:false */
