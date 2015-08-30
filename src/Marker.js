/**
 *  The positions here have already been calculated from the markers' coordinates
 *
 *  Example coordinates:
 *  --------------------
 *  latitude  = 50 - 52
 *  longitude = -1 - 1
 */

export default class Marker {
	constructor(options) {
		this.className = options.className;
		this.left = options.position[0];
		this.top = options.position[1];
	}
	// render() {
	// 	var htmlString = '<li class="'+ this.className +'"><a href="#">';
	// 	if (this.name) {
	// 		htmlString += this.name
	// 	}
	// 	htmlString += '</a></li>';
	// 	return htmlString;
	// }
	moveTo() {

	}
};