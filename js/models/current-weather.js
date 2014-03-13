define(function (require) {
	var Backbone = require('backbone');

	var CurrentWeather = Backbone.Model.extend({

	});

	return CurrentWeather;

});

define(function (require) {

	var Backbone = require('backbone');

	var DailyForecast = Backbone.Collection.extend({
		model: CurrentWeather
	});

	return DailyForecast;

});