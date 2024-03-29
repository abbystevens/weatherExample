define(function (require) {
	var Backbone = require('backbone');

	var Hourly = Backbone.View.extend({
		el: '#hourly',

		initialize: function () {
			this.render();
		},

		render: function () {
			var self = this;
			this.$el.html('<ul></ul');

			this.collection.each(function (model) {
				self.$el.append('<li>' + model.getFormattedTime() + ": " + model.get('summary') + '</li>');
			});

			return this;
		}

	});

	return Hourly;
	
});