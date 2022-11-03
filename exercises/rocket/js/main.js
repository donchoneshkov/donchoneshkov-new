var topVar = 500;
var leftVar = 200;
var header = document.getElementById('header');
var playAreaWidth = document.getElementById('playArea').offsetWidth;
var playAreaHeight = document.getElementById('playArea').offsetHeight;
var playArea = document.getElementById('playArea');
var playAreaContainer = document.getElementById('playAreaContainer');
var fastStars = document.getElementById('fastStars');
var fasterStars = document.getElementById('fasterStars');
var rocket = document.getElementById('rocketGif');
var rocketContainer = document.getElementById('rocket');
var backgroundMusic = document.getElementById('backgroundMusic');
var soundControl = document.getElementById('soundControl');
var rocketSrcEndNumber = 6;
var rocketAnimCooldown = 0;
var animationTimer = 0;
var rocketAngle = 90;
var checkIfExecuted = 0;
var checkIfControls = 0;
var controlsArray = [0,0,0,0,0,0]; //[start,left,up,right,down,fire] start is changed in controls.js
var deltaT = 0;
var currentLives = 3;
var score = 0;
var lost = 0;


function mainFunction(){

    if(controlsArray[0]){

    	if (checkIfExecuted == 0) {

      		takeOff();
      	
    	}

    }

    if (checkIfControls == 1) {

    	moveRocket();
    	progressionTimer++;

	    if (controlsArray[5]){

	    	fireWeapon(weapon);
	    	fireSideWeapon(sideWeapon);

	    } else {fireCooldown = 0}

	}

	progression();

	detectCollision();

	detectFriendlyCollision();

	detectEnemyCollision();

	detectEnemyWeaponCollision();

	animateBullet();

	removeWeapon();

	spawnEnemy(progressionTimer);

	animateEnemy();

	removeEnemy();

	killAnimation();

	animateEnemyWeapon();

	spawnBonus(progressionTimer);

	animateBonus();

	removeBonus();

	updateScore();

	moveBackground();

	//console.log(progressionTimer);

	if(!lost) setTimeout(window.requestAnimationFrame(mainFunction), 10);

	
	
}

playSoundtrack('inBase');
updateRocketPosition();
adjustCurrentLives(currentLives);
mainFunction();

