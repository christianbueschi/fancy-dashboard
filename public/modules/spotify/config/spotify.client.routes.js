'use strict';

// Setting up route
angular.module('spotify').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
			state('spotify', {
				url: '/spotify',
				templateUrl: 'modules/spotify/views/spotify.client.view.html'
			});
	}
]);