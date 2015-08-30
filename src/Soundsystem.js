
import Marker from './Marker';

export default class Soundsystem extends Marker {
	constructor(options) {
		super(options);
		this.name = options.name;
		this.description = options.description;
	}
	showInfo() {
		return this.name + '\n' + this.description;
	}
};