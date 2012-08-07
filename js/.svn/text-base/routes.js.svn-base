define([
	'jquery',
	'backbone',
	'underscore',
	'views/map'],
function($, Backbone, _, mapView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			this.mapView = mapView;
			Backbone.history.start();
		},
		routes: {
			''										: 'home',
			'zoom/:level'					: 'zoom'
		},
		home: function(){
		},
		zoom: function(level) {
			console.log('zooming to: '+level);
			this.mapView.model.set({zoom: level});
		}
	});
	
	return Router;
});
