'use strict';

var TFLStatuses = (function() {
	// Here we make our asynchronous call to TFL - 
	// except it should really be done in node to cut down on requests
	// 
	// http://transportapi.com/v3/uk/tube/stations/performance.json?
	// [include_station_fields=true]

	var data = {
		'Westbourne Park': {
			'status': 'Bad', 
			'colorCode': '#ff0000'
		}
	}

	return data;

})();



/**
 *  Make some instances of the Soundsystem object 
 *  and hold them in an array
 */
var soundsystems = (function() {
	var data = [
		{
			type : "soundsystem", 
			name : "4 Play",
			description : "House, garage, R&B, hip hop, bashment, reggae",
			position : [ 1 , 1 ]
		},
		{
			type : "soundsystem", 
			name : "Aba-shan-ti",
			description : "Roots, reggae, dub",
			position : [ 1 , 1 ]
		},
		{
			type : "soundsystem", 
			name : "Arts A Light",
			description : "R&B, reggae, hip hop, classic garage",
			position : [ 1 , 1 ]
		}
	];

	var list = [];

	for (var i = 0; i < data.length; i++) {
		list.push( new Soundsystem({ 'type': data[i].type, 'position': data[i].position, 'name': data[i].name, 'description': data[i].description }) );
	}

	return list;

})();





// var soundsystem01 = new Soundsystem({ 'type': 'soundsystem', 'position': [ 10.55, 20.44 ], 'name': 'Aba-shanti-i', 'description': 'reggae, dub' });

var station01 = new Station({ 'type': 'station', 'position': [ 10.55, 20.44 ], 'name': 'Westbourne Park' });

var toilet01 = new Marker({ 'type': 'toilet', 'position': [ 10.55, 20.44 ] });


