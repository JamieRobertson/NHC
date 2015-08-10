/**
 *  The positions here have already been 
 *  calculated from the markers' coordinates
 *
 *  Example coordinates:
 *  --------------------
 *  latitude  = 50 - 52
 *  longitude = -1 - 1
 *
 */


'use strict';

/**
*  Marker object = Parent object
*/
function Marker(options) {
	this.type = options.type;
	this.left = options.position[0];
	this.top = options.position[1];
};

Marker.prototype.render = function() {
	var htmlString = '<li class="'+ this.type +'"><a href="#">';
	if (this.name) {
		htmlString += this.name
	}
	htmlString += '</a></li>';
	return htmlString;
};

Marker.prototype.moveTo = function() {
};



/**
 *  Child objects - they extend Marker object
 */
function Soundsystem(options) {
	Marker.call(this, options);
	this.name = options.name;
	this.description = options.description;
};

Soundsystem.prototype = Object.create(Marker.prototype);

Soundsystem.prototype.showInfo = function() {
	return this.name + '\n' + this.description
}


function Station(options) {
	Marker.call(this, options);
	this.name = options.name;
};

Station.prototype = Object.create(Marker.prototype);

Station.prototype.getStatus = function() {
	// Make asynchronous call to TFL from the server and output it somewhere
	// Put data in an object somewhere organised 
	return TFLStatuses[this.name].status;
};

