/* The player character. sprites are made within functions
* using Rect and Ellipse.
*
* It moves from user input, collects and interacts with items and can
* be hurt or damage enemies and move the screen and level
*/

class Playa{
	constructor(posX, posY, height, width) {
		this.posX = posX;
		this.posY = posY;
		this.height = height;
		this.width = width;
		
		this.size = height*width;
		this.id = {1, "player"};
	}
	
	// sprite for idle anim
	function playerIdle (){
		
	}
}