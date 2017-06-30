
/*/////////////////////////////////////////
// -------------- Nav Top -------------- //
/////////////////////////////////////////*/

var navTop = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables
	var navTopActive = false;


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$document  = $(document);
		DOM.$navToggle = $('.nav-toggle');
		DOM.$nav       = $('.nav');
	}

	// Bind events
	function bindEvents() {
		DOM.$navToggle.click(toggleNavTop);
		DOM.$document.on('click', dismissNavTop);
		DOM.$nav.on('click', exceptTopNav);
	}

	// Handle events
	function toggleNavTop(e) {
		if (navTopActive == false) {
			DOM.$nav.toggleClass('toggled');
			navTopActive = true;
			e.stopPropagation();
		} else if (navTopActive == true) {
			DOM.$nav.toggleClass('toggled');
			navTopActive = false;
			e.stopPropagation();
		}
	}

	function dismissNavTop() {
		if (navTopActive == false) {
			return;
		}
		DOM.$nav.toggleClass('toggled')
		navTopActive = false;
	}

	function exceptTopNav(e) {
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