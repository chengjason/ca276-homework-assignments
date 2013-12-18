// JavaScript Document
//Draw Head Banner in series
//Left Head Canvas
var c = document.getElementById("hbcanvas1");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 220, 100);
ctx.fillStyle = "#00FFFF";
ctx.font = "40px Arial Bold";
ctx.fillText("CA276", 40, 80);

//Central Head Canvas
var c = document.getElementById("hbcanvas2");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 500, 100);
ctx.fillStyle = "#FF00FF";
ctx.font = "60px Arial Regular";
ctx.fillText("Drawing on Canvas", 15, 80);

//Right Head Canvas
var c = document.getElementById("hbcanvas3");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 220, 100);
ctx.fillStyle = "#00FFFF";
ctx.font = "40px Arial Narrow";
ctx.fillText("Jason Cheng", 15, 80);
//Draw a Line
var c = document.getElementById("lineCanvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
//Draw a Circle
var c = document.getElementById("cirCanvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
var c = document.getElementById("cirCanvasF");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#3F0";
ctx.fill();
//Draw Circles in Series 
function draw() {
	var ctx = document.getElementById('cirCanvasSeries').getContext('2d');
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++) {
			ctx.beginPath();
			var x = 25 + j * 50; // x coordinate
			var y = 25 + i * 50; // y coordinate
			var radius = 20; // Arc radius
			var startAngle = 0; // Starting point on circle
			var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
			var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

			ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

			if (i > 1) {
				ctx.fill();
			} else {
				ctx.stroke();
			}
		}
	}
}
draw();
//Draw Text
var c = document.getElementById("textCanvas1");
var ctx = c.getContext("2d");
ctx.font = "60px Arial Bold";
ctx.fillStyle = "#363"
ctx.fillText("CA276", 30, 80);
var c = document.getElementById("textCanvas2");
var ctx = c.getContext("2d");
ctx.font = "60px bold ";
ctx.strokeText("CA276", 30, 80);
//Draw Gradient - Linear 
var c = document.getElementById("grdCanvas1");
var ctx = c.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "#00F"); //Blue from left
gradient.addColorStop(1, "#FFF"); //White from right
ctx.fillStyle = gradient;
ctx.fillRect(5, 5, 190, 90);
//Draw Gradient - Radial	
var c = document.getElementById("grdCanvas2");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "#F00"); //Red from the center of the Canvas
grd.addColorStop(1, "#FF3"); //Yellow reversely
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(5, 5, 190, 90);