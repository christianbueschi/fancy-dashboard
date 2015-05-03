'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Transport', 'Weather', '$http', 'Spotify', 'Shopping',
	function($scope, Transport, Weather, $http, Spotify, Shopping) {

		var _this = this;

		this.getList = function() {
			//Spotify.login();
			Spotify.getArtistTopTracks('1vCWHaC5f2uS3yhpwWbIA6', 'AU').then(function (data) {
				console.log(data);
				_this.tracks = data.tracks;
			});
			/*Spotify.getUserPlaylists('christianbueschi').then(function (data) {
				console.log(data);
			});*/
		};


		this.getTransportConnection = function() {
			var transport = Transport.get({}, function() {
				_this.transport1 = transport.connections[0].from.departure;
				_this.transport2 = transport.connections[1].from.departure;
			});
			setTimeout(function() {
				_this.getTransportConnection();
			},1000*10); // every 10 seconds
		};

		this.submit = function() {
			var shoppingItem = new Shopping ({
				title: this.title
			});
			shoppingItem.$save(function(response) {
				_this.title = '';
				_this.getAllItems();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		this.getAllItems = function() {
			this.items = Shopping.query();
		};

		this.bought = function(item) {
			item.$update(function() {
				_this.getAllItems();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		this.remove = function(item) {
			item.$remove(function() {
				_this.getAllItems();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		this.getWeatherForecast = function() {
			var forecast;
			var setFirstCode = false;
			var weather_code = 1; // default value

			var weather = Weather.get({}, function() {
				forecast = weather.forecast;
				angular.forEach(forecast, function(day, date) {
					if(!setFirstCode) {
						weather_code = day.w;
						if(weather_code>9) {
							weather_code = weather_code/10;
						}
						weather_code = parseInt(weather_code);
						setFirstCode = true;
					}
				});

				_this.weather_code = weather_code;
				_this.weather = weather.forecast;
				setTimeout(function() {
					_this.getWeatherForecast();
				},1000*60*60); // every hour
			});
		};
	}
]);