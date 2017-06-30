
/*/////////////////////////////////////////
// -------------- wysiwyg -------------- //
/////////////////////////////////////////*/

var wysiwyg = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$document = $(document);
	}

	// Bind events
	function bindEvents() {
		DOM.$document.ready(includeCkeditor);
	}

	// Handle events
	function includeCkeditor() {
		CKEDITOR.replace('wysiwyg');
		CKEDITOR.config.codeSnippet_theme = 'monokai_sublime';
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