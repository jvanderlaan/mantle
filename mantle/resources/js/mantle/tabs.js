
/*/////////////////////////////////////////
// --------------- Tabs ---------------- //
/////////////////////////////////////////*/

var tabs = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$tab        = $('.tab');
		DOM.$tabContent = $('.tab-content');
	}

	// Bind events
	function bindEvents() {
		DOM.$tab.click(switchTab);
	}

	// Handle events
	function switchTab(e) {
		e.preventDefault();

		var tabSelected = $(this).children('a').attr('href');

		var activeTab = $(this).hasClass('tab-active');

		if (activeTab == true) {
			return;
		}

		DOM.$tab.removeClass('tab-active');
		DOM.$tabContent.removeClass('tab-active').css('opacity', '0');

		$(this).addClass('tab-active');
		$(tabSelected).addClass('tab-active').animate({
			opacity: 1
		}, 600, 'linear');
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