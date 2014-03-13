define(function (require) {
	var Backbone = require('backbone');

	var DailyForecast = Backbone.Model.extend({

		getFormattedTime: function () {
			var UTC = this.get('time') * 1000;

			return new Date(UTC).toString();
		}
		
	});

	return DailyForecast;

});