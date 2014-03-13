define(function (require) {
	var Backbone = require('backbone');

	var Router = Backbone.Router.extend({
		initialize: function (options) {
			this.currentWeatherView = options.current;
			this.forecastView = options.forecast;
			this.hourlyView = options.hourly;
		},

		routes: {
			'current': 'displayCurrentWeather',
			'forecast': 'displayForecast',
			'hourly': 'displayHourly'
		},

		displayForecast: function () {
			this.currentWeatherView.$el.hide();
			this.forecastView.$el.show();
			this.hourlyView.$el.hide();
		},

		displayCurrentWeather: function () {
			this.currentWeatherView.$el.show();
			this.forecastView.$el.hide();
			this.hourlyView.$el.hide();
		},

		displayHourly: function () {
			this.currentWeatherView.$el.hide();
			this.forecastView.$el.hide();
			this.hourlyView.$el.show();
		}

	});

	return Router;

});