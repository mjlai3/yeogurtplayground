// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import jQuery from 'jquery';
import 'slick-carousel';

import Link from '../_modules/link/link';

$(() => {
	new Link(); // Activate Link modules logic
	console.log('Welcome to Yeogurt!');

	$('.foo').slick(); // Activates slick plugin
});

