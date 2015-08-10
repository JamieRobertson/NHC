'use strict';


var MapUI = {
	clickEvents: function(wrapper, elements) {
		// Here we need to create a temporary scope to preserve i's value
		// http://ejohn.org/apps/learn/#59

		var $output_children = wrapper.querySelectorAll('a');

		for (var i = 0; i < $output_children.length; i++) (function(i) {
			$output_children[i].onclick = function(e) {
				e.preventDefault();
				console.log( elements[i].showInfo() );
			}
		})(i);
	},
	renderElements: function(wrapper, elements, callback) {
		for (var i = 0; i < elements.length; i++) {
			wrapper.innerHTML += elements[i].render();
		}
		callback(wrapper, elements);
	},
	populateIdWithHTML: function(id, text) {
		// nice, but unused, helper method
		var el = document.getElementById(id);
		el.innerHTML = text;
	},
	initialize: function() {
		var $output = document.getElementById('output');
		this.renderElements($output, soundsystems, this.clickEvents);
	}
};

/**
 *  document.ready event
 */
function addEvent(to, type, fn){
    if (document.addEventListener){
        to.addEventListener(type, fn, false);
    } else if(document.attachEvent){
        to.attachEvent('on'+type, fn);
    } else {
        to['on'+type] = fn;
    }   
};

/**
 *  start app when body is loaded
 */
addEvent(window, 'load', function(){
	MapUI.initialize();
});