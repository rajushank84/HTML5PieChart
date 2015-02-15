/* 
	@description PieChart widget.
	@author: Natarajan Shanker
*/

// The PieChart constructor
var PieChart = function (data, attributes) {
	this.data = data;
	this.initColors();
	this.attributes = attributes;
	this.draw();
};

// The PieChart prototype exposing the functionality
PieChart.prototype = {

	// set colors to data elements if they weren't passed
	initColors: function () {
		var colors = ["red", "blue", "green", "orange", "pink", "lightblue", "brown", "lightgreen"];
		
		for (var i = 0; i < this.data.length; i++) {
			this.data[i].color = colors[i];
		}
	},

	// draw the pie chart
	draw: function () {

		// create the canvas if it doesn't exist
		this.canvas = this.canvas || this.createCanvas();

		// set canvas properties
		var ctx = this.canvas.getContext("2d");
		ctx.font = "30px Arial";

		// TODO: Impement
		var lastend = 0;

		debugger;
		for (var i = 0; i < this.data.length; i++) {
			ctx.fillStyle = this.data[i].color;
			ctx.beginPath();

			ctx.moveTo(200, 150);
			ctx.arc(200, 150, 150, lastend, lastend + (Math.PI * 2 * (this.data[i].value / 100)), false);
			
			ctx.lineTo(200, 150);
			ctx.fill();
			
			lastend += Math.PI * 2 * (this.data[i].value / 100);
		}
	},

	// create the canvas DOM object and add it to the body, return it
	createCanvas: function () {
		var canvas = document.createElement("canvas"),
			attributes = this.attributes || {};
			attributes.width = attributes.width || "480";
			attributes.height = attributes.height || "480px";

		for (attribute in attributes) {
			canvas.setAttribute(attribute, attributes[attribute]);
		}

		document.body.appendChild(canvas);

		return canvas;
	}
};

