
/*/////////////////////////////////////////
// ----------- Notifications ----------- //
/////////////////////////////////////////*/

var notifications = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$dismissNotification = $('.dismiss-notification');
	}

	// Bind events
	function bindEvents() {
		DOM.$dismissNotification.click(closeNotification);
	}

	// Handle events
	function closeNotification(e) {
		e.preventDefault();
		$(this).parent().hide();
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