
/*/////////////////////////////////////////
// ------------ Dropdowns -------------- //
/////////////////////////////////////////*/

var dropdowns = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables
	var dropdownActive = false;


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$document        = $(document);
		DOM.$dropdownToggle  = $('.dropdown-toggle');
		DOM.$dropdownContent = $('.dropdown-content');
	}

	// Bind events
	function bindEvents() {
		DOM.$dropdownToggle.click(toggleDropdown);
		DOM.$document.on('click', dismissDropdown);
		DOM.$dropdownContent.on('click', exceptDropdownContent);
	}

	// Handle events
	function toggleDropdown(e) {
		if (dropdownActive == false) {
			$('#'+$(this).data('id')).toggleClass('toggled');
			dropdownActive = true;
			e.stopPropagation();
		} else if (dropdownActive == true) {
			$('#'+$(this).data('id')).toggleClass('toggled');
			dropdownActive = false;
			e.stopPropagation();
		}
	}

	function dismissDropdown() {
		if (dropdownActive == false) {
			return;
		}
		$('.dropdown-content.toggled').toggleClass('toggled')
		dropdownActive = false;
	}

	function exceptDropdownContent(e) {
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