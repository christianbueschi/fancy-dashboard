/**
 * Created by cbueschi on 27/04/15.
 */

'use strict';


/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Shopping = mongoose.model('Shopping'),
	_ = require('lodash');


exports.read = function (req, res) {
	console.log('read');
	res.jsonp(req.shopping);
};

exports.addNewItem = function (req, res) {

	var item = new Shopping(req.body);

	item.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(item);
		}
	});
};

exports.getAllItems = function (req, res) {
	Shopping.find().sort('-created').exec(function (err, shopping) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(shopping);
		}
	});
};

exports.update = function (req, res) {

	Shopping.findByIdAndUpdate(req.params.shoppingId, {
			$set: { title: req.body.title, isBought: req.body.isBought}
		}, { upsert: true },
		function(err, obj) {
			return res.json(true);
		});
};

exports.delete = function(req, res) {
	Shopping.findByIdAndRemove(req.params.shoppingId, function() {
		return res.json(true);
	});
};