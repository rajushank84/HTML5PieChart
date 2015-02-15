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

		var width = parseInt(this.attributes.width),
			height = parseInt(this.attributes.height);

		// set canvas properties
		var ctx = this.canvas.getContext("2d");
		ctx.font = "30px Arial";

		var lastend = 0;

		for (var i = 0; i < this.data.length; i++) {
			ctx.fillStyle = this.data[i].color;
			ctx.beginPath();

			ctx.moveTo(width / 2, height / 2);
			ctx.arc(width / 2, height / 2, height / 2, lastend, lastend + (Math.PI * 2 * (this.data[i].value / 100)), false);
			
			ctx.lineTo(width / 2, height /2 );
			ctx.fill();
			
			lastend += Math.PI * 2 * (this.data[i].value / 100);
		}
	},

	// create the canvas DOM object and add it to the body, return it
	createCanvas: function () {
		var canvas = document.createElement("canvas");

		this.attributes = this.attributes || {};

		this.attributes.width = this.attributes.width || "320px";
		this.attributes.height = this.attributes.height || "320px";

		for (attribute in this.attributes) {
			canvas.setAttribute(attribute, this.attributes[attribute]);
		}

		document.body.appendChild(canvas);

		return canvas;
	}
};

