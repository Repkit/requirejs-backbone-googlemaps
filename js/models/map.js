// models/map.js

define([
	'jquery',
	'backbone',
	'underscore'
], function($, Backbone, _) {
	var Map = Backbone.Model.extend({
		defaults: {
			backgroundColor: '#5a88b5',
			center: new google.maps.LatLng(33.7489954, -84.3879824),
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			maxZoom: 18,
			minZoom: 2,
			panControl: false,
			streetViewControl: false,
			zoom: 8,
			zoomControl: true
		},
		initialize: function() {
			console.log('Map Model initialize');
		}
	});

	return Map;
});
