var rm = rm || {};
/* global FastClick, document */

rm.general = (function () {
	'use strict';

	var init = function () {

	    $('.wysiwyg').fitVids({ customSelector: 'iframe[src*="youtube.com"]'});

	    $('.menu-toggle').on('click', function(e){
	    	e.preventDefault();
	    });

	    $(function() {
	        FastClick.attach(document.body);
	    });

	};

	// return public api
	return {
		init: init
	};


}());
/* global rm:false, window:false */

rm.navSearch = (function () {
	'use strict';

	function activateSearch (trigger, form, event, logo) {
		if (!trigger.parent().hasClass('open')) {
			event.preventDefault();
		}
		form.addClass('open')
			.delay(500).queue(function(){
				trigger.prev().focus();
			});
		logo.addClass('fade');
	}

	var init = function () {

		var navBarWrap = $('.navbar-form');
		var navForm = navBarWrap.find('form');
		var navButton = navBarWrap.find('button');
		var logo = $('.logo');

		navButton.on('click', function (event) {
			var $this = $(this);
			var $event = event;
			if ($this.parents().hasClass('navbar-form-top') && $(window).width() < 768) {
				activateSearch($this, navForm, $event, logo );
			}
		});

		$('html').on('click touchstart',function () {
			navForm.removeClass('open');
			logo.removeClass('fade');
		});

		$('.headerSearch').on('click touchstart',function(event){
			event.stopPropagation();
		});

	// return public api
	};
	return {
		init: init
	};

}());
/* global rm:false, document:false, window:false */
rm.forms = (function () {
    'use strict';

	var init = function () {
        $('.chosen-select').chosen({
			'disable_search_threshold': 999,
            'disable_search': true,
			'placeholder_text_single': 'Please select'
        });

        // chosen adds an input on the page that is for its search feature, this hides it for accessibilty purposes
        $('.chosen-search input').attr('type', 'hidden');

        if ($(window).width() > 768) {
	        $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	            event.preventDefault();
	            $(this).ekkoLightbox();
	        });
        }

        // function for expanding additional form fields
        var $form = $('.form-body');
        var $extraFields = $form.find('.extra-fields');
        var $expandGroupInput = $('.expand-trigger-group').find('input');
        var $extraFieldsWrap;

        // limit to 3 checkboxes where required
        var $limitedCheckboxes = $('.data-limit');
        var $limitedCheckboxesInput = $limitedCheckboxes.find('input');

         $limitedCheckboxesInput.click(function(event) {
             if (this.checked && $('input:checked').length > 3) {
                 event.preventDefault();
             }
         });

        // hide extra fields
        $extraFields.hide();
        $expandGroupInput.on('click', function(){
            if ($(this).data('trigger') === 'expand-trigger') {
                $extraFieldsWrap = $(this).closest('.form-group').next();
                if ($extraFieldsWrap.hasClass('extra-fields')) {
                    $extraFieldsWrap.slideDown();
                    $extraFieldsWrap.find('.form-control').attr('required', true);
                    rm.validate.init();
                }else{
                    // if the extra fields are in a different position to the trigger, eg. at the bottom of the form like volunteering, use the $extraFields var
                    $extraFields.slideDown();
                    $extraFields.find('.form-control').attr('required', true);
                    rm.validate.init();
                }
            } else {
                $extraFieldsWrap = $(this).closest('.form-group').next();
                if ($extraFieldsWrap.hasClass('extra-fields')) {
                    $extraFieldsWrap.slideUp();
                    $extraFieldsWrap.find('.form-control').attr('required', false);
                    rm.validate.init();
                }else{
                    // use the $extraFields var
                    $extraFields.slideUp();
                    $extraFields.find('.form-control').attr('required', false);
                    rm.validate.init();
                }
            }
        });

        // switch on validation
        var $triggerValidation = $('[data-validateToggle="activate-validation-trigger"]');
        var $extraFieldsValidate = $('.extra-fields-validate');

        $('[type="radio"]').on('change', function(){
            if ($triggerValidation.is(':checked')) {
                $extraFieldsValidate.find('.form-control').attr('required', true);
                rm.validate.init();

            } else {
                $extraFieldsValidate.find('.form-control').attr('required', false).removeClass('input-validation-error');
                rm.validate.init();
            }
        });

        // disable certain fields on selection of others
        $('.disable-trigger-group input').on('change', function(){

            if($('.disable-trigger-one').is(':checked')) {
                $('.disable-one').addClass('disabled-by-one');
            } else  {
                $('.disable-one').removeClass('disabled-by-one');
            }
            if($('.disable-trigger-two').is(':checked')) {
                $('.disable-two').addClass('disabled-by-two');
            } else {
                $('.disable-two').removeClass('disabled-by-two');
            }

            $('[class*="disable"]').each(function(){
                if ($(this).hasClass('disabled-by-one')) {
                    $(this).prop('disabled', true).prop('checked', false);
                }
                else if (!$(this).hasClass('disabled-by-one') && !$(this).hasClass('disabled-by-two') ) {
                    $(this).removeAttr('disabled');
                } else if ($(this).hasClass('disabled-by-two')) {
                    $(this).prop('disabled', true).prop('checked', false);
                }
            });
        });

        $( '.datepicker' ).datepicker({
            dateFormat: 'dd/mm/yy'
        });
	// return public api
	};
	return {
		init: init
	};

}());
/* global rm:false, navigator:false */

rm.modal = (function () {
	'use strict';

	var init = function () {

		// test for mac or windows to show appropriate message
		var trigger = $('a[href="#popup-resize"]');
		var href = trigger.attr('href');

		if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
		  trigger.attr('href', href + '-mac');
		} else {
		  trigger.attr('href', href + '-windows');
		}

		// get youtube ID
		var videoTrigger = $('.banner').find('.modal-trigger');
		var youTubeId;
		if (videoTrigger.length) {
			youTubeId = videoTrigger.attr('href').split('/')[4].split('?')[0];
		}
		$('.modal-trigger').magnificPopup({
		    disableOn: 768,
		    iframe: {
		      markup: '<div class="mfp-iframe-scaler">'+
		                '<div class="mfp-close"></div>'+
		                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		              '</div>',
		      patterns: {
		        youtube: {
		          index: 'youtube.com/',
		          id: 'v=',
		          src: '//www.youtube.com/embed/' + youTubeId +'?autoplay=1;rel=0&amp;showinfo=0'
		        }
		      },
		      srcAction: 'iframe_src',
		    }
		});
	};
	// return public api
	return {
		init: init
	};


}());
/* global rm:false */

rm.carousel = (function () {
	'use strict';

	var init = function () {

		$('.thumbs').flexslider({
			animation: 'slide',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 164,
			itemMargin: 30,
			asNavFor: '.main-slider'
		});

		$('.main-slider').flexslider({
			animation: 'fade',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: '.thumbs',
			directionNav: false
		});
	};
// return public api
return {
	init: init
};


}());
/* global rm:false, window: false */

rm.navScroll = (function () {
	'use strict';


	function scroll(target, hash) {
		$('html, body').animate({
		     scrollTop: $(target).offset().top }, 800 ,'easeInOutCubic', function(){
		     	window.location.hash = hash;
		 });
	}
	var init = function () {

		$('.inline-nav a[href^="#"]').on('click', function(e) {

		   // prevent default anchor click behavior
		   e.preventDefault();

		   // store hash
		   var hash = this.hash;

		   // animate
	   		if ($(this).hasClass('footer-back-to-top')) {
			   scroll('body', hash);
	   		} else {
			   scroll(this.hash, hash);
	   		}

		});

	// return public api
	};
	return {
		init: init
	};

}());
/* global rm:false */

rm.slider = (function () {
	'use strict';

	var init = function () {

		var option = $('#calculator').find('select'),
			totalInitial = option.find('option:selected').data('amount'),
			dapMaxInitial = option.find('option:selected').data('max');

		// initialise appropriate slider on page load
		if (dapMaxInitial) {
			initialiseDAPSlider(dapMaxInitial, totalInitial);
		} else {
			initialiseSlider(totalInitial);
		}

		// reinitialise on option change
		option.on('change', function(){
			var total = option.find('option:selected').data('amount'),
				dapMax = option.find('option:selected').data('max');
			// resetSlider();
			if (dapMax) {
				initialiseDAPSlider(dapMax, total);
			} else {
				initialiseSlider(total);
			}
		});

		// enables the amount to be manually input by user
		$('.slider-amount').on('input', function(){
			initialiseSlider($(this).val());
		});
	};

	// reset slider values
	function resetSlider() {
	    // $( '#slider-range' ).slider('option', 'value', 0 );
	    $('#slider-range').slider('value', $('#slider-range').slider('option', 'min'));
	}

	// initialise slider without a data-max set in the CMS
	function initialiseDAPSlider (dapMax, radTotalValue) {
		var radTotal = radTotalValue,
			radValue = $( '.slider-amount' ),
			dapValue = $( '.slider-result' );

		// reset slider values
	    radValue.val(radTotalValue);
	    dapValue.val('0.00');

		// initialise slider
		$( '#slider-range' ).slider({
			min: 0,
			max: dapMax,
			range: 'min',
			step: 0.1,
			slide: function( event, ui ) {
		        changeValue(ui.value);
			}
		});

	    resetSlider();
		// work out correct values for input fields
		function changeValue(radCurrentValue){
	        var percentage = (radCurrentValue / dapMax) * 100;
	        var currentSliderValue = percentage * radTotal / 100;
	        dapValue.val((((radCurrentValue).toFixed(2))));
	        radValue.val(radTotal-((currentSliderValue).toFixed(0)));
		}
	}

	// initialise slider without a data-max set in the CMS
	function initialiseSlider(total){

		// set variables
		var radStart = total,
			amount = $( '.slider-amount' ),
			result = $( '.slider-result' );

		//populate the input fields on page load
	    amount.val(radStart);
	    result.val('0.00');

		// initialise slider
		$( '#slider-range' ).slider({
			min: 0,
			max: radStart,
			range: 'min',
			step: 0.1,
			slide: function( event, ui ) {
		        changeValue(ui.value);
			}
		});

	    resetSlider();
		// work out correct values for input fields
		function changeValue(radCurrentValue){
	       var currentSliderValue = Math.round(((6.6505 / 100) * radCurrentValue)) / 365;
	       amount.val((((radStart-radCurrentValue).toFixed(0))));
	       result.val(((currentSliderValue).toFixed(2)));
		}
	}


	return {
		init: init
	};

}());
/* global google, InfoBox, RichMarker, filters, maps,map, results, resultsFound, json, setAllMap,  document: false  */
/* jshint expr:true, loopfunc: true, unused:false  */

/*global window: false */
rm.map = (function () {
	'use strict';
	var mapElement = $('#map');



	// on page load scroll to #map_anchor
	// check first for the existence of the #map_anchor
	if ($('a[name="map_anchor"]').length > 0) {
		window.location = '#map_anchor';
		// if you are on the search page (searchTerm is not empty) inject the val into the search field and show the close button
		if (getParameterByName('searchTerm') !== null) {
			$('.map_btnClose').show();
			$('.search-bar-large .search input').val(getParameterByName('searchTerm'));
		}
	}
	// on close/clear search reload if different to current search val
	var $searchBar = $('.search-bar-large');
	var $searchClose = $searchBar.find('button[type="button"]');
	var $searchGo = $searchBar.find('button[type="submit"]');

	$searchClose.on('click', function() {
		window.location = '/locations/';
	});

	// switch search icon and close icon
    if($('.search-bar-large input').val()) {
		$searchGo.hide();
	}
	$('.search-bar-large input').on('input', function(){
	    if($(this).val()) {
	        $searchClose.show();
	        $searchGo.hide();
	    } else {
	        $searchGo.show();
	        $searchClose.hide();
	    }
	});

	function getParameterByName(name) {
	    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}


	// json data held in the HTML
	var types = {
		'Dementia Care': {
			typeIndicatorClass: 'DementiaCare'
		},
		'Retirement Living': {
			linkProperty: 'RetirementLivingDetailPage',
			typeIndicatorClass: 'RetirementLiving'
		},
		'Residential Care': {
			linkProperty: 'ResidentialCareDetailPage',
			typeIndicatorClass: 'ResidentialCare'
		},
		'HomeCare': {
			linkProperty: 'HomeCareDetailPage',
			typeIndicatorClass: 'HomeCare'
		}
	};

	// cookies
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = 'expires='+d.toUTCString();
	    document.cookie = cname + '=' + cvalue + '; ' + expires;
	}

	function getCookie(cname) {
	    var name = cname + '=';
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)===' ') {c = c.substring(1);}
	        if (c.indexOf(name) !== -1) {return c.substring(name.length, c.length);}
	    }
	    return '';
	}

	var markers = [];

	/*
		Creating a new map
	*/

	//check for element on page and if exists create map
	if (mapElement.length) {
		// return;
		var map = new google.maps.Map(document.getElementById('map'), {
			center: new google.maps.LatLng(-33.8639784, 151.05892),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
	}

	var mapsRun = function () {
		if (mapElement.length <= 0) {
			return;
		}

		if (rm.resize.isSmall()) {
			return;
		}

		var infoWindow = new InfoBox({
			content: document.getElementById('infobox'),
			disableAutoPan: false,
			maxWidth: 226,
			pixelOffset: new google.maps.Size(-113, -2),
			zIndex: null,
			closeBoxURL: 'http://www.google.com/intl/en_us/mapfiles/close.gif',
			infoBoxClearance: new google.maps.Size(20, 20),
			alignBottom: true,
			boxStyle: {
				width: '226px'
			}
		});


		// Looping through the JSON data

		var json = results.SearchResults;

		// setup bounds for markers
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0, length = json.length; i < length; i++) {
			var data = json[i],
			latLng = new google.maps.LatLng(data.Lat, data.Long);


			// set different colour on background for homeCare marker if necessary
			var type = data.Type,
				homeCare;

			if (type === 'HomeCare') {
				homeCare = 'homeCare';
			} else {
				homeCare = '';
			}

			var marker = new RichMarker({
				position: latLng,
				map: map,
				flat: true,
				title: data.Name,
				content: '<div data-type="'+ data.Type.replace(/\s/g, '').replace(/,/g, ' ')  +'" class="marker ' + homeCare +'"><span>' +
				data.Name +
				'</span>' +
				'</div>'
			});

			//extend bounds with each marker position
			bounds.extend(marker.getPosition());

			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, 'click', function() {
					function createInfoWindow(data){
						var typeIndicatorClasses = [];
						var linkResultArray = [];

						var typeArray = data.Type.split(',');
						var length = typeArray.length;
						for(var i = 0; i < length; i++) {
							var typeName = typeArray[i];
							var typeInfo = types[typeName];
							if(typeInfo.linkProperty) {
								linkResultArray.push('<a class="btn btn-default btn-sm '+ typeInfo.typeIndicatorClass +'" href="'+ data[typeInfo.linkProperty] +'">' + (typeName === 'HomeCare' ? 'Find out more' : typeName)+'</a>');
							}
							typeIndicatorClasses.push(typeInfo.typeIndicatorClass);
						}

						// render info window
						var contentString = '<div class="infoWindow">';
						if (data.Image !== '') {
							contentString += '<img src="'+ data.Image + '">';
						}
						contentString += '<div class="content">' +
						'<h5 class="name">' + data.Name + '</h5>'+
						'<div class="address">'+
						'<div>' + data.Address + '</div>'+
						'<div>' + data.Suburb + '</div>'+
						'<div>' + data.PostCode + '</div>';
						if (data.Type === 'HomeCare') {
							if (data.PhoneNumber !== undefined && data.PhoneNumber !== '') {
								contentString += '<div>' + data.PhoneNumber + '</div>';
							}
						}
						if (data.Type !== 'HomeCare') {
							contentString += '<div class="type-indicator ' + typeIndicatorClasses.join(' ') + '"></div>';
						}
						contentString += linkResultArray.join(' '); +
						'</div>'+
						'</div>'+
						'</div>';

						infoWindow.setContent(contentString);
						infoWindow.open(map, marker);
					}
			  	  	createInfoWindow(data);
				});

				markers.push({
					data: data,
					marker: marker
				});

			})(marker, data);
		}

		// This is needed to set the zoom after fitbounds, if only 1 marker is selected from search results the map will be zoomed in too much so set a max zoom level
		google.maps.event.addListener(map, 'zoom_changed', function() {
		    var zoomChangeBoundsListener =
		        google.maps.event.addListener(map, 'bounds_changed', function(event) {
		            if (this.getZoom() > 15 && this.initialZoom === true) {
		                // Change max/min zoom here
		                this.setZoom(15);
		                this.initialZoom = false;
		            }
		        google.maps.event.removeListener(zoomChangeBoundsListener);
		    });
		});
		map.initialZoom = true;
		map.fitBounds(bounds);

		// use a listener to setZoom on idle
		var listener = google.maps.event.addListener(map, 'idle', function() {
			if (map.getZoom() > 10) {
				map.setZoom(10);
			}
			google.maps.event.removeListener(listener);
		});


		// filters for the pins to be shown and hidden
		// desktop filters
		$('.filters-wrap').addClass('desktop-filters').removeClass('mobile-filters');
		var $allFiltersWrap = $('.desktop-filters');
		var $allFilters = $allFiltersWrap.find('.filters a');

		// all filters selected on page load
		// $allFilters.addClass('active');


		$.each($allFilters, function(){
			var $target = $(this);

			$target.on('click', function(e){
			    e.preventDefault();

				// update which filters are selected
				updateFilters($target, $allFilters);

				// redraw markers function

				updateMarkers();
			});
		});

		// show 'results not found if variable is true'
		if (resultsFound) {
			$('.search-bar-large').append('<span class="error">No results found. Please browse the map or search again.</span>');
		}
	};

	var setTheCookieValue = function(){
		var activeFilterData= [];
		var activeFilters = $('.filters .active');
		activeFilters.each(function(){
			activeFilterData.push($(this).data('selector'));
		});
		setCookie('filterValue', activeFilterData);
	};

    var updateFilters = function($target, $allFilters){

    	// turn on filter
	    if ($target.hasClass('active')) {
	    	$target.removeClass('active');
	    } else {
		    $target.addClass('active');
	    }

	    // action for the 'all' filter
		if ($target.hasClass('all')) {
			if ($target.hasClass('active')) {
				$allFilters.removeClass('active');
				$allFilters.addClass('active');
			} else {
				$allFilters.removeClass('active');
			}
		} else {
			$('.all').removeClass('active');
		}

		if ($('.desktop-filters .active').length > 3) {
			$('.desktop-filters a').addClass('active');
		}

		// change the mobile filter functionality so that only one filter can be selected at a time or all
	     if ($target.closest('.mobile-filters').length && $target.hasClass('all')) {
		     if ($target.hasClass('active')) {
		     	$allFilters.removeClass('active');
		     	$allFilters.addClass('active');
		     }
		     if (!$target.hasClass('active')) {
		     	$allFilters.removeClass('active');
		     }
	     } else if ($target.closest('.mobile-filters').length && !$target.hasClass('all')) {
	     	$allFilters.removeClass('active');
	     	$target.addClass('active');
	     }

 		// set the cookie
 		setTheCookieValue();

    };

	var clearFilters = function(){
		$('.desktop-filters .filters a').removeClass('active');
	};

	var mapsMobile = function(){
		if (mapElement.length <= 0) {
			return;
		}

		$('.filters-wrap').addClass('mobile-filters').removeClass('desktop-filters');

		var $mapList = $('.map-list');
		var $mapListUl = $mapList.find('ul');
		$mapListUl.empty();
		var $filterWrap = $('.mobile-filters');
		var $filtersMob = $filterWrap.find('.filters a');
		var $trigger = $filterWrap.find('button');

		$filtersMob.addClass('active');

		// create list
		var json = results.SearchResults;
		var linkResultArrayMobile = [];

		/*
			filter HomeCare Locations
		*/
		var hcArr = [];
		$.each(json, function() {
			if (this.nodeTypeAlias === 'HomeCareLocations') {
				hcArr.push(this);
			}
		});

		if (hcArr.length > 0) {
			var nodeId = hcArr[0].NodeId;
		}

		$.each(json, function(){
			var mobData = this;

			if (mobData.nodeTypeAlias === 'HomeCareLocations' && mobData.NodeId !== nodeId) {
				return;
			}

			var typeIndicatorClasses = [];
			var linkResultArray = [];
			var typeArray = mobData.Type.split(',');
			var length = typeArray.length;
			for(var i = 0; i < length; i++) {
				var typeName = typeArray[i];
				var typeInfo = types[typeName];
				if (typeName !== 'Dementia Care') {
					linkResultArray.push('<a class="btn btn-default btn-sm" href="'+ mobData[typeInfo.linkProperty] +'">' + typeName+'</a>');
				}
				typeIndicatorClasses.push(typeInfo.typeIndicatorClass);
			}

			var contentString = '<li class="infoWindow '+ mobData.Type.replace(/\s/g, '').replace(/,/g, ' ')  +'">'+
			'<div class="content">' +
			'<h5 class="name">' + mobData.Name + '</h5>'+
			'<div class="address">'+
			'<div class="address-items">'+
			'<div><a href="http://maps.google.com/?q='+mobData.Address+','+mobData.Suburb+','+mobData.PostCode+'">' + mobData.Address + '</a></div>'+
			'<div>' + mobData.Suburb + '</div>'+
			'<div>' + mobData.PostCode + '</div>' +
			'</div>';
			if (mobData.Type === 'HomeCare') {
				if (mobData.PhoneNumber !== undefined && mobData.PhoneNumber !== '') {
					contentString += '<div class="phone"><a href="tel:'+mobData.PhoneNumber+'">' + mobData.PhoneNumber + '</a></div>';
				}
			}
			if (mobData.Type !== 'HomeCare') {
				contentString += '<div class="type-indicator ' + mobData.Type.replace(/\s/g, '').replace(/,/g, ' ')  + '"></div>';
			}
			contentString += linkResultArray.join(' '); +
			'</div>'+
			'</div>'+
			'</li>';
			$(contentString).appendTo($mapListUl);
		});

		/*
			filter the results
		*/

		// kill on events for filters
		$filtersMob.off('click touch');

		$filtersMob.on('click touch', function (e) {
			if (!$('.collapse').hasClass('in')) {
				return;
			}
		    e.preventDefault();
		    $trigger.trigger('click');
			var $target = $(this);
		    var $filterValue = $(this).data('selector');
			var $items = $mapList.find('.infoWindow');
			var $container = $mapList.closest('.container');

			updateFilters($target, $filtersMob);

			if ($container.find('span').length) {
				$container.find('span').remove();
			}

		    $mapList.closest('.container').slideUp(200); //100
		    setTimeout(function(){
			    $items.not($filterValue).hide();
			    $items.filter($filterValue).show();
			    if ($filterValue === 'all' ) {
			    	$items.show();
			    }

			    // if ((!$target.hasClass('active') && $filterValue === 'all') || !$filterValue.length) {
			    // 	$items.hide();
			    // 	$mapList.closest('.container').append('<span class="no-results">There are no results</span>');
			    // }
		    	$mapList.closest('.container').slideDown(500);

		    }, 200);
		});

		if (resultsFound) {
			$('.search-bar-large').append('<span class="error">No results found. Please browse our locations below or search again.</span>');
		}
	};



	var updateMarkers = function() {
		var checkedFilters = $('a.active');

		var filterValues = [];
		$.each(checkedFilters, function(){
			filterValues.push($(this).data('filter'));
		});

		var bounds = new google.maps.LatLngBounds();
		var markerCount = 0;
		$.each(markers, function () {
	    	var markerInfo = this;
	    	var hasFilterValue = false;
	    	$.each(filterValues, function() {
	    		var value = this;
		    	if(markerInfo.data.Type.indexOf(value) !== -1) {
		    		bounds.extend(markerInfo.marker.getPosition());
	    			markerCount++;
		    		hasFilterValue = true;
		    		return false;
		    	}
		    });
			markerInfo.marker.setVisible(hasFilterValue);
	    });
	    if (markerCount !== 0) {
	    	map.fitBounds(bounds);
		}
	};

	var setFiltersFromCookie = function() {
		var $allFilters = $('.desktop-filters .filters a');
		var cookieInfo = getCookie('filterValue').split(',');

		$.each(cookieInfo, function(){
			var item = this;
			if (item.length && item!=='all') {
				var selector = $('a[data-selector="' + item + '"]');
				updateFilters(selector, $allFilters);
				updateMarkers();
			}
			if (item === 'all') {
				$('.all').addClass('active');
			}
		});
/* jshint ignore:start */

		if (cookieInfo == null || cookieInfo == '') {
			$($allFilters).addClass('active');
		}
/* jshint ignore:end */
	};

	return {
		mapsRun: mapsRun,
		mapsMobile: mapsMobile,
		updateFilters: updateFilters,
		clearFilters: clearFilters,
		setFiltersFromCookie: setFiltersFromCookie
	};
}());
/* global rm:false, window:false */
rm.resize = (function () {
	'use strict';

	// check window width and set 'isSmall' to tru or false
	var isSmall = function() {
	    var windowWidth = $(window).width();
	    return windowWidth < 767;
	};

	// initialise functions based on widndow width
	function doneResizing(){
	    if(isSmall()) {
		    rm.map.mapsMobile();
	    } else {
		    rm.map.mapsRun();
	    }
	}

	var init = function () {
		var resizing;
		if (!isSmall()) {
			$(window).resize(function() {
			    clearTimeout(resizing);
			    resizing = setTimeout(doneResizing, 500);
			});
		}
		doneResizing();
		window.addEventListener('orientationchange', function() {
		    rm.map.mapsRun();
		    rm.map.clearFilters();
		}, false);
	};

	return {
		init: init,
		isSmall: isSmall
	};

}());
/* global rm:false */

rm.validate = (function () {
	'use strict';

	var init = function () {
		var errorContainer = $('.errorContainer');
		// $.validator.setDefaults({ ignore: ':hidden:not(select)' }); // to work with chosen select
		$('.form-container').validate({
			ignore: ':hidden:not(select)', // this ensures the chsen select validates properly
			errorClass: 'input-validation-error', // the error class applied
			errorPlacement: function(error, element) { // placement of the error msg
				if (element.parents('div.validation-inline-group').length) {
					var $parent = element.parent('div');
					$parent.css({
						'position': 'relative'
					});
					error.appendTo( $parent );
				} else if (element.parents('div.validation-checkbox-group').length) {
					error.appendTo( element.closest('div.validation-checkbox-group').parent().next('div'));
				} else {
					error.appendTo( element.closest('.validation').next('div') );
				}
			},
			errorElement: 'span', // error element created
			errorContainer: errorContainer,
			focusInvalid: false, // required to ensure the below invalidHandler scrolling works
		    invalidHandler: function(form, validator) { // when it invalidates
		        if (!validator.numberOfInvalids()) {
		        	return;
		        }
			    var firstErrorElement = $(validator.errorList[0].element); // get first invalid element
				var positionSelect = firstErrorElement.parent().offset().top - 30; // find parent element of and get position, add an offset from that
		    	$('body,html,document').animate({
		    	    scrollTop: positionSelect // scroll to its parent
		    	}, 300, 'easeInOutQuart');
		    }
		});
	};

	return {
		init: init
	};

}());
/* global rm:false, window:false */

rm.responsiveImages = (function () {
	'use strict';

	var init = function () {
	    var $responsive = $('[data-full]');
	    if (!$responsive.length) {
	    	return;
	    }

	    var windowWidth = $(window).width();
        $('[data-full]').each(function() {
            var $this = $(this);
            var mobileSize = $this.attr('data-full');
            var largeSrc = $this.attr('src');
		    if(windowWidth < 768) {
	            if($this.data('bg')) {
                    if (mobileSize !== null && mobileSize !== '') {
                        $this.css('background-image','url('+mobileSize+')');
                    }
	            } else {
	                if (mobileSize !== null && mobileSize !== '') {
                    	$this.attr('src', mobileSize);
                    	$this.attr('data-full', largeSrc);
	                }
	            }
		    } else {
                if (mobileSize !== null && mobileSize !== '') {
                	$this.attr('src', largeSrc);
                	$this.attr('data-full', mobileSize);
                }
		    }
	    });
	};

	return {
		init: init
	};

}());
/*global window */

rm.tables = (function () {
	'use strict';

	var init = function () {

		// removed responsive table class to make table collapse naturally on mobile
		var $table = $('.wysiwyg table');
	    $table
	    	.addClass('table')
	    	.wrap('<div class="table-responsive" />');

	    	if($(window).width() < 768) {
	    		$table.parent().after('<span style="display:none" class="table-msg">If you can\'t view all of the table data, swipe across<img class="svg" src="img/chevron.svg"/></span>');
		      /*
		       * Replace all SVG images with inline SVG
		       */
	          $('img.svg').each(function(){
	              var $img = jQuery(this);
	              var imgID = $img.attr('id');
	              var imgClass = $img.attr('class');
	              var imgURL = $img.attr('src');

	              $.get(imgURL, function(data) {
	                  // Get the SVG tag, ignore the rest
	                  var $svg = jQuery(data).find('svg');

	                  // Add replaced image's ID to the new SVG
	                  if(typeof imgID !== 'undefined') {
	                      $svg = $svg.attr('id', imgID);
	                  }
	                  // Add replaced image's classes to the new SVG
	                  if(typeof imgClass !== 'undefined') {
	                      $svg = $svg.attr('class', imgClass+' replaced-svg');
	                  }

	                  // Remove any invalid XML tags as per http://validator.w3.org
	                  $svg = $svg.removeAttr('xmlns:a');

	                  // Replace image with new SVG
	                  $img.replaceWith($svg);

	              }, 'xml');
	              $img.parent().show();

	          });
	    	}

	        $('.wysiwyg').fitVids({ customSelector: 'iframe[src*="youtube.com"]'});

	};


	// return public api
	return {
		init: init
	};


}());