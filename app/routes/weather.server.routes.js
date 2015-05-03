'use strict';

module.exports = function(app) {
	// Root routing
	var weather = require('../../app/controllers/weather.server.controller');

	app.route('/weather').get(weather.weather);
};