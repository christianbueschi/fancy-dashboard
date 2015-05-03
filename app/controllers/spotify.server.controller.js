/**
 * Created by cbueschi on 27/04/15.
 */
'use strict';

var http = require('http');
var request = require('request');

/**
 * Module dependencies.
 */

exports.spotify = function(req, res) {


	var options = {
		host: 'api.wetter.com',
		path: '/forecast/weather/city/CH0CH0324/project/fancydashboard/cs/a18de4a4527dd35e769de57682251497/output/json'
	};

	http.get(options, function(result) {
		var body = '';
		result.on('data', function(d) {
			body += d;
		});
		result.on('end', function() {
			// Data reception is done, do whatever with it!
			var parsed = JSON.parse(body);
			var forecast = parsed.city;
			res.jsonp(forecast);
		});
	}).on('error', function(e) {
		console.log('Got error: ' + e.message);
	});

};