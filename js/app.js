define(function(require){
	var $ = require('jquery');
	
	var CurrentWeatherModel = require('models/current-weather');
	var Forecast = require('collections/Forecast');
	
	var CurrentWeatherView = require('views/current-weather');
	var ForecastView = require('views/forecast');
	var HourlyView = require('views/hourlyView');
	
	var Router = require('router');

	var app = {};

	var latLong = "45.4871,-122.8037";
	var apiKey = "26de49f97cabcf04d4f5d2df5c416778";
	var url = "https://api.forecast.io/forecast"

	$.getJSON(url + '/' + apiKey + '/' + latLong + "?callback=?")
		.done(main)
		.fail(function() {
			$("#loading-message").text("Your data failed to load!")
		});

		function main (data) {
			$('#loading-message').text("Your weather is here!")
		 	 
		  var currentWeatherModel = new CurrentWeatherModel(data.currently);
		 	var dailyForecastCollection = new Forecast(data.daily.data);
		 	var hourlyForecastCollection = new Forecast(data.hourly.data);

		 	var currentWeatherView = new CurrentWeatherView({model: currentWeatherModel});
		 	var forecastView = new ForecastView({collection: dailyForecastCollection});
		 	var hourlyView = new HourlyView({collection: hourlyForecastCollection});

		 	var router = new Router({
	 	 		current:  currentWeatherView,
	 	 		forecast: forecastView, 
	 	 		hourly: hourlyView
		 	});

		 	Backbone.history.start();

		 	app.current = currentWeatherModel;
		 	app.forecast = dailyForecastCollection;
		 	app.hourly = hourlyForecastCollection;
		};

	 window.app = app;

});