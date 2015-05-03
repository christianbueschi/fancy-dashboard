'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', 'SpotifyProvider',
	function($locationProvider, SpotifyProvider) {
		$locationProvider.hashPrefix('!');

		SpotifyProvider.setClientId('7cb9a23e173e4c54987f4d90dd777509');
		SpotifyProvider.setRedirectUri('http://localhost:3000/#!/spotify');
		SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
		// If you already have an auth token
		//SpotifyProvider.setAuthToken('zoasliu1248sdfuiknuha7882iu4rnuwehifskmkiuwhjg23');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});