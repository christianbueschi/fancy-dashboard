'use strict';

module.exports = function(app) {
	// Root routing
	var shopping = require('../../app/controllers/shopping.server.controller');

	app.route('/shopping').get(shopping.getAllItems)
		.post(shopping.addNewItem);

	app.route('/shopping/:shoppingId')
		.get(shopping.read)
		.put(shopping.update)
		.delete(shopping.delete);
};