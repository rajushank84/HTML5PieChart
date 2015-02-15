/* 
	@description PieChart widget.
	@author: Natarajan Shanker
*/

// The PieChart constructor
var PieChart = function (data, attributes) {
	this.data = data;
	this.attributes = attributes;
	this.draw();
};

// The PieChart prototype exposing the functionality
PieChart.prototype = {

	// draw the pie chart
	draw: function () {

		// create the canvas if it doesn't exist
		this.canvas = this.canvas || this.createCanvas();

		// set canvas properties
		var ctx = this.canvas.getContext("2d");
		ctx.font = "30px Arial";

		// TODO: Impement
	},

	// create the canvas DOM object and add it to the body, return it
	createCanvas: function () {
		var canvas = document.createElement("canvas"),
			attributes = this.attributes || {};
			attributes.width = attributes.width || "960px";
			attributes.height = attributes.height || "300px";

		for (attribute in attributes) {
			canvas.setAttribute(attribute, attributes[attribute]);
		}

		document.body.appendChild(canvas);

		return canvas;
	}
};

