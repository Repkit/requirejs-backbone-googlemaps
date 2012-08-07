// views/map.js

define([
	'jquery',
	'backbone',
	'underscore',
	'models/map'],
function($, Backbone, _, Map){
	var mapView = Backbone.View.extend({
		el: '#map-canvas',
		initialize: function(){
			this.model = new Map();
			this.model.bind('change:zoom', this.updateZoom, this);
			this.map = new google.maps.Map(this.el, {
				backgroundColor: this.model.get('backgroundColor'),
				center: this.model.get('center'),
				mapTypeControl: this.model.get('mapTypeControl'),
				mapTypeId: this.model.get('mapTypeId'),
				maxZoom: this.model.get('maxZoom'),
				minZoom: this.model.get('minZoom'),
				panControl: this.model.get('panControl'),
				streetViewControl: this.model.get('streetViewControl'),
				zoom: this.model.get('zoom'),
				zoomControl: this.model.get('zoomControl')
			});
		},
		render: function(){

		},
		updateZoom: function(e, zoom) {
			this.map.setZoom(parseInt(zoom, 10));
		}
	});
	
	return new mapView();
});
