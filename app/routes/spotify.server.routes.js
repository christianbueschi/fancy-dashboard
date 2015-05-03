'use strict';

module.exports = function(app) {
	// Root routing
	var spotify = require('../../app/controllers/spotify.server.controller');

	app.route('/spotify').get(spotify.spotify);
};