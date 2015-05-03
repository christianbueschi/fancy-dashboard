'use strict';

//Teams service used to communicate Teams REST endpoints
angular.module('core').factory('Weather', ['$resource', function($resource) {

	var url = '/weather';

	return $resource(url);
}
]);




