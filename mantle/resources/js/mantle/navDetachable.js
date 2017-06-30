
/*/////////////////////////////////////////
// ---------- Nav Detachable ----------- //
/////////////////////////////////////////*/

var navDetachable = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$document     = $(document);
		DOM.$window       = $(window);
		DOM.$scrollAnchor = $('.scroll-anchor');
		DOM.$navAside     = $('.nav-aside');
		DOM.$section      = $('.section');
	}

	// Bind events
	function bindEvents() {
		DOM.$scrollAnchor.click(scrollToSection);
		DOM.$window.scroll(detachNav);
		DOM.$document.ready(attachNav);
	}

	// Handle events
	function scrollToSection(e) {

		e.preventDefault();

		var scrollAnchorID = $(this).attr('href').slice(1);
		var	scrollPosition = $('.section[id="' + scrollAnchorID + '"]').offset().top;

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 600);

		return false;
	}

	function detachNav() {

		var topPosition = $(this).scrollTop();

		if (topPosition >= 500) {
			DOM.$navAside.addClass('detached');
			DOM.$section.each(function(i) {
				if ($(this).position().top <= topPosition - 500) {
					$('.scroll-anchor.active').removeClass('active');
					$('.scroll-anchor').eq(i).addClass('active');
				}
			});
		} else {
			DOM.$navAside.removeClass('detached');
		}
	}

	function attachNav() {

		var verticalPosition = DOM.$document.scrollTop();

		if (verticalPosition > 500) {
			DOM.$navAside.addClass('detached');
		} else {
			$('.scroll-anchor:first').addClass('active');
		}

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