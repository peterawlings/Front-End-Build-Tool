// requires: src.js

$(function () {
    'use strict';

    // initialise modules
    rm.general.init();
    rm.navSearch.init();
    rm.forms.init();
    rm.modal.init();
    rm.carousel.init();
    rm.navScroll.init();
    rm.slider.init();
    // rm.map.mapsMobile();
    rm.validate.init();
    rm.responsiveImages.init();
    rm.tables.init();

    /* the following get initialised in resize.init(); */
    // rm.map.mapsMobile();
    // rm.map.mapsRun();
    rm.resize.init()
    rm.map.setFiltersFromCookie();

});
