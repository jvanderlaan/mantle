
/*/////////////////////////////////////////
// ------------- Nav Side -------------- //
/////////////////////////////////////////*/

var navSide = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables
	var navSideActive = false;


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$document  = $(document);
		DOM.$navToggle = $('.nav-toggle');
		DOM.$navSide   = $('.nav-side');
	}

	// Bind events
	function bindEvents() {
		DOM.$navToggle.click(toggleNavSide);
		DOM.$document.on('click', dismissNavSide);
		DOM.$navSide.on('click', exceptNavSide);
	}

	// Handle events
	function toggleNavSide(e) {
		if (navSideActive == false) {
			DOM.$navSide.toggleClass('toggled');
			navSideActive = true;
			e.stopPropagation();
		} else if (navSideActive == true) {
			DOM.$navSide.toggleClass('toggled');
			navSideActive = false;
			e.stopPropagation();
		}
	}

	function dismissNavSide() {
		if (navSideActive == false) {
			return;
		}
		DOM.$navSide.toggleClass('toggled')
		navSideActive = false;
	}

	function exceptNavSide(e) {
		e.stopPropagation();
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