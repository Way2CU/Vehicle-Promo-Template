/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2018. by Way2CU, http://way2cu.com
 * Authors:
 */

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {
	if (Site.is_mobile()) {
		Site.mobile_menu = new Caracal.MobileMenu();

		var preview_tables = document.querySelector('div#vehicle_stats > article');
		var vehicle_overview = document.querySelector('div#vehicle_overview');

		preview_tables.addEventListener('click', function(event) {
			event.preventDefault();
			vehicle_overview.classList.toggle('toggle_overview_visibility');
			console.log("damn");
		});
		// for(var i=0; i < preview_tables.length; i++) {
		// 	preview_tables[i].addEventListener('click', function(event) {
		// 		event.preventDefault();
		// 		vehicle_overview.classList.toggle('toggle_overview_visibility');
		// 	});
		// }
	}
};


// connect document `load` event with handler function
window.addEventListener('load', Site.on_load);
