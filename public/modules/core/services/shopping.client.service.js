'use strict';

angular.module('core').factory('Shopping', ['$resource',
	function ($resource) {

		var url = 'shopping/:shoppingId';

		return $resource(url, { shoppingId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);




