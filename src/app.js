import React from './lib/react/react';
// import Marker from './Marker';
import Soundsystem from './Soundsystem';
import Station from './Station';

/**
 *  Make some instances of the Soundsystem object 
 *  and hold them in an array
 */
let soundsystems = (function() {
	let data = [
		{
			className : "soundsystem", 
			name : "4 Play",
			description : "House, garage, R&B, hip hop, bashment, reggae",
			position : [ 1 , 1 ]
		},
		{
			className : "soundsystem", 
			name : "Aba-shan-ti",
			description : "Roots, reggae, dub",
			position : [ 1 , 1 ]
		},
		{
			className : "soundsystem", 
			name : "Arts A Light",
			description : "R&B, reggae, hip hop, classic garage",
			position : [ 1 , 1 ]
		}
	];

	let list = [];

	for (let i = 0; i < data.length; i++) {
		list.push( new Soundsystem({ 'className': data[i].className, 'position': data[i].position, 'name': data[i].name, 'description': data[i].description }) );
	}

	return list;

})();

console.log(soundsystems[2].showInfo());
console.log(soundsystems);

React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('map')
);


// var TFLStatuses = (function() {
// 	// Here we make our asynchronous call to TFL - 
// 	// except it should really be done in node to cut down on requests
// 	// 
// 	// http://transportapi.com/v3/uk/tube/stations/performance.json?
// 	// [include_station_fields=true]

// 	var data = {
// 		'Westbourne Park': {
// 			'status': 'Bad', 
// 			'colorCode': '#ff0000'
// 		}
// 	}

// 	return data;

// })();



// var MapUI = {
// 	clickEvents: function(wrapper, elements) {
// 		// Here we need to create a temporary scope to preserve i's value
// 		// http://ejohn.org/apps/learn/#59

// 		var $output_children = wrapper.querySelectorAll('a');

// 		for (let i = 0; i < $output_children.length; i++) (function(i) {
// 			$output_children[i].onclick = function(e) {
// 				e.preventDefault();
// 				console.log( elements[i].showInfo() );
// 			}
// 		})(i);
// 	},
// 	renderElements: function(wrapper, elements, callback) {
// 		for (var i = 0; i < elements.length; i++) {
// 			wrapper.innerHTML += elements[i].render();
// 		}
// 		callback(wrapper, elements);
// 	},
// 	populateIdWithHTML: function(id, text) {
// 		// nice, but unused, helper method
// 		var el = document.getElementById(id);
// 		el.innerHTML = text;
// 	},
// 	initialize: function() {
// 		var $output = document.getElementById('output');
// 		this.renderElements($output, soundsystems, this.clickEvents);
// 	}
// };

// /**
//  *  document.ready event
//  */
// function addEvent(to, type, fn){
//     if (document.addEventListener){
//         to.addEventListener(type, fn, false);
//     } else if(document.attachEvent){
//         to.attachEvent('on'+type, fn);
//     } else {
//         to['on'+type] = fn;
//     }   
// };

// /**
//  *  start app when body is loaded
//  */
// addEvent(window, 'load', function(){
// 	MapUI.initialize();
// });