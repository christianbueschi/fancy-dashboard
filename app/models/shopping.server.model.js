'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var ShoppingSchema = new Schema({
	title: {
		type: String,
		trim: true,
		default: ''
	},
	isBought: {
		type: Boolean,
		trim: true,
		default: false
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Shopping', ShoppingSchema);