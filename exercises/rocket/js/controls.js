document.body.onkeyup = function(rocketControlKeyUp) {
	if(rocketControlKeyUp.keyCode == 69 && animationTimer > 150) {controlsArray[0] = 0;}
	if(rocketControlKeyUp.keyCode == 37) {controlsArray[1] = 0;}
	if(rocketControlKeyUp.keyCode == 38) {controlsArray[2] = 0;}
	if(rocketControlKeyUp.keyCode == 39) {controlsArray[3] = 0;}
	if(rocketControlKeyUp.keyCode == 40) {controlsArray[4] = 0;}
	if(rocketControlKeyUp.keyCode == 32) {controlsArray[5] = 0;}
}
document.body.onkeydown = function(rocketControlKeyDown) {
	if(rocketControlKeyDown.keyCode == 69) {controlsArray[0] = 1;}
	if(rocketControlKeyDown.keyCode == 37) {controlsArray[1] = 1;}
	if(rocketControlKeyDown.keyCode == 38) {controlsArray[2] = 1;}
	if(rocketControlKeyDown.keyCode == 39) {controlsArray[3] = 1;}
	if(rocketControlKeyDown.keyCode == 40) {controlsArray[4] = 1;}
	if(rocketControlKeyDown.keyCode == 32) {controlsArray[5] = 1;}
}
