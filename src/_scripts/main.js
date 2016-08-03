// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'slick-carousel';
import 'foundation-sites';
import 'foundation-sites/js/foundation.util.mediaQuery.js';

import Link from '../_modules/link/link';

$(() => {
	new Link(); // Activate Link modules logic
	console.log('Welcome to Yeogurt!');

	$('.foo').slick(); // Activates slick plugin
});

