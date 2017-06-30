
/*/////////////////////////////////////////
// -------------- Slider --------------- //
/////////////////////////////////////////*/

var slider = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$sliderChevronLeft  = $('.slider-chevron.left');
		DOM.$sliderChevronRight = $('.slider-chevron.right');
		DOM.$sliderOuter        = $('.slider-outer');
	}

	// Bind events
	function bindEvents() {
		DOM.$sliderChevronLeft.click(slideLeft);
		DOM.$sliderChevronRight.click(slideRight);
	}

	// Handle events
	function slideLeft() {
		var leftPosition = DOM.$sliderOuter.scrollLeft();
		DOM.$sliderOuter.animate({
			scrollLeft: leftPosition - 400
		}, 400);

	}

	function slideRight() {
		var leftPosition = DOM.$sliderOuter.scrollLeft();
		DOM.$sliderOuter.animate({
			scrollLeft: leftPosition + 400
		}, 400);

	}


	/* ============ Public Methods ============ */

	// Initialization method
	function init() {
		cacheDOM();
		bindEvents();
	}


	/* ======== Export Public Methods ========= */

	return {
		init: init
	};

}());