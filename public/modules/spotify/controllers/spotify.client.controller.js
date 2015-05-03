/**
 * Created by cbueschi on 27/04/15.
 */
'use strict';


angular.module('spotify').controller('SpotifyController', ['$scope', 'Spotify',
	function($scope, Spotify) {

		var target = window.self === window.top ? window.opener : window.parent;
		var hash = window.location.hash;
		if (hash) {
			var token = window.location.hash.split('&')[0].split('=')[1];
			alert(token);
			//target.postMessage(token, 'http://example.com/');
			localStorage.setItem('spotify-token', token);
		}
	}
]);