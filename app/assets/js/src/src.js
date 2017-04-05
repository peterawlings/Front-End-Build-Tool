/*jshint esversion: 6 */
// requires: plugins.js


var rm = rm || {};
/* global FastClick, document */

rm.general = (function () {
	'use strict';

	var init = function () {

		let test = [1,2,3];

		test.map(x => console.log('Test' + x) );
		console.log('JS working');

	};

	// return public api
	return {
		init: init
	};


}());
/* global rm:false, window:false */
