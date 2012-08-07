// This set's up the module paths for underscore and backbone
require.config({
  paths: {
		'underscore': 'libs/underscore-min',
		'backbone': 'libs/backbone-min'
	},
	shim: {
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		}
	}
});

require([
	'underscore',
	'backbone',
	'routes'
	],
	function(_, Backbone, Router){
		this.router = new Router();
});
