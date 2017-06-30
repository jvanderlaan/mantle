
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

/*/////////////////////////////////////////
// -------------- Modals --------------- //
/////////////////////////////////////////*/

var modals = (function() {

	'use strict';

	// Cached DOM elements container
	var DOM = {};
	
	// Module scope variables
	var modalActive = false;


	/* ============ Private Methods ============ */

	// Cache DOM elements
	function cacheDOM() {
		DOM.$modal           = $('.modal');
		DOM.$modalToggle     = $('.modal-toggle');
		DOM.$modalClose      = $('.modal-close');
		DOM.$modalBackground = $('.modal-background');
		DOM.$modalContent    = $('.modal-content');
		DOM.$body            = $('body');
		DOM.$nav             = $('.nav');
	}

	// Bind events
	function bindEvents() {
		DOM.$modalToggle.click(toggleModal);
		DOM.$modalClose.click(closeModalButton);
		DOM.$modalBackground.on('click', closeModalBackground);
		DOM.$modalContent.on('click', exceptModalContent);
	}

	// Handle events
	function toggleModal(e) {
		DOM.$modal.toggleClass('toggled');
		DOM.$body.toggleClass('modal-active');
		DOM.$nav.toggleClass('modal-active');
		modalActive = true;
		e.stopPropagation();
	}

	function closeModalButton(e) {
		DOM.$modal.toggleClass('toggled');
		DOM.$body.toggleClass('modal-active');
		DOM.$nav.toggleClass('modal-active');
		modalActive = false;
		e.stopPropagation();
	}

	function closeModalBackground() {
		if (modalActive == false) {
			return;
		}
		DOM.$modal.toggleClass('toggled');
		DOM.$body.toggleClass('modal-active');
		DOM.$nav.toggleClass('modal-active');
		modalActive = false;
	}

	function exceptModalContent(e) {
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

/*/////////////////////////////////////////
// ---------- Initialization ----------- //
/////////////////////////////////////////*/

$(document).ready(function() {

	wysiwyg.init();
	dropdowns.init();
	modals.init();
	navDetachable.init();
	navSide.init();
	navTop.init();
	notifications.init();
	slider.init();
	tabs.init();
	
});