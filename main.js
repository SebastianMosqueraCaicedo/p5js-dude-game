import {Playa} from "/src/objs/playa.js";

function setup(){
	createCanvas(256,256);
	background(0);
	let playa = new Playa(100,100,10,10);
};

function draw(){
	ellipse(0,0,50,50);
	playa.draw();
};
