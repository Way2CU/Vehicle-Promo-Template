/**
 * Main JavaScript
 * Vehicle Template
 *
 * Copyright (c) 2018. by Way2CU, http://way2cu.com
 * Authors: Mladen Mijatov, Vladimir Anusic
 */

// create or use existing site scope
var Site = Site || new Object();

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || new Object();


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
	// implement click handler for details
	var preview = document.querySelector('div#stats > p');
	var details = document.querySelector('div.details');

	if (preview)
		preview.addEventListener('click', function(event) {
			event.preventDefault();
			details.classList.toggle('visible');
		});

	// assign classes based on statistics
	var numbers = preview.querySelectorAll('strong');
	if (numbers.length > 0)
		for (var i=0, count=numbers.length; i<count; i++) {
			var item = numbers[i];
			var value = item.innerText;
			var base_class = i < 2 ? 'safety_' : 'polution_';

			if (!isNaN(value))
				item.classList.add(base_class + value);
		}
};


// connect document `load` event with handler function
window.addEventListener('load', Site.on_load);
