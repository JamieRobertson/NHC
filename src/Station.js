
import Marker from './Marker';

export default class Station extends Marker {
	constructor(options) {
		super(options);
		this.name = options.name;
	}
	getStatus() {
		// Make asynchronous call to TFL from the server and output it somewhere
		// Put data in an object somewhere organised 
		return TFLStatuses[this.name].status;
	}
};