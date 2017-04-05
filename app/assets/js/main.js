'use strict';

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = window.console || {};

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

/*jshint esversion: 6 */
// requires: plugins.js


var rm = rm || {};
/* global FastClick, document */

rm.general = function () {
    'use strict';

    var init = function init() {

        var test = [1, 2, 3];

        test.map(function (x) {
            return console.log('Test' + x);
        });
        console.log('JS working');
    };

    // return public api
    return {
        init: init
    };
}();
/* global rm:false, window:false */

// requires: src.js

$(function () {
    'use strict';

    // initialise modules

    rm.general.init();
});