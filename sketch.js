function setup(){
	createCanvas(600, 600).parent('cnvs')
	stroke(255);
	connections = new SquareConnections(20)
}

function draw(){
	background(0);
	connections.draw()
}
