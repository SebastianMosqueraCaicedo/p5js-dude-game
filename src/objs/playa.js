/* The player character. sprites are made within functions
* using Rect and Ellipse.
*
* It moves from user input, collects and interacts with items and can
* be hurt or damage enemies and move the screen and level
*/

import {colorPalette} from "/src/vars/colorPalette.js";

class Playa{
	constructor(Xpos, Ypos, height, width) {
		this.Xpos = Xpos;
		this.Ypos = Ypos;
		this.height = height;
		this.width = width;
		
		this.size = height*width;
		this.id = {1, "player"};
	};
	
	// sprite for idle anim
	function playerIdle (){
		noStroke();
		fill(NRED);
		square(this.Xpos, this.Ypos, this.size);
		
	};

	function draw(){
		playerIdle();
	};
}
