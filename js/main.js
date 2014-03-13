requirejs.config({
	urlRoot: '/js',

	paths: {
		'jquery': 'lib/jquery-2.1.0',
		'backbone': 'lib/backbone',
		'underscore': 'lib/underscore'
	}
});

require(['app']);
//this works because it will look inside the url root js and see app because it is in that directory