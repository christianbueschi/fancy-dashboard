'use strict';

//Teams service used to communicate Teams REST endpoints
angular.module('core').factory('Transport', ['$resource', function($resource) {

	var url = 'http://transport.opendata.ch/v1/connections?from=Mittelstrasse&to=Bern';

	return $resource(url);
}
]);




