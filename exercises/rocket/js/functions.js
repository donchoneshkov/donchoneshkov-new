function takeOff() {

	if (checkIfExecuted == 0) {

		animateLaunch();

	}

}

function animateLaunch() {

	rocket.src = 'assets/smallfighter/smallfighter6.png';
	updateRocketPosition();
	animationTimer++;
	deltaT = animationTimer/10;

	if (deltaT < 5) {

		topVar = topVar - deltaT;

	}

	if (rocketAngle > 0 && deltaT > 5) {

		topVar = topVar+2 ;
		leftVar = leftVar+2 ;

	}	

	if (rocketAngle > 0 && deltaT > 5) {

		rocketAngle--;

	}

	if (rocketAngle == 0) {

		rocket.src = 'assets/smallfighter/smallfighter6.png';
		checkIfExecuted = 1;
		checkIfControls = 1;
		soundtrack = 'inFlight';
		playSoundtrack(soundtrack);

		
	}

}

function adjustCurrentLives(currentLives) {

	var rocketImgs = document.getElementsByClassName('lives');

	if (currentLives > 5) currentLives = 5;

	for (i = 0; i < 5; i++ ) {

		if (i < currentLives){

			rocketImgs[i].style.visibility = 'visible';

		} else {

			rocketImgs[i].style.visibility = 'hidden';

		}
	}

}

function moveRocket() {

    if (controlsArray[1]){  // left

		if(leftVar > 0){

			leftVar = leftVar-rocketSpeed;

			if (rocketSrcEndNumber > 1) {

				rocketAnimCooldown++;

				if (rocketAnimCooldown == turnRate) {

					rocketSrcEndNumber--;
					rocketAnimCooldown = 0;

				}

			}

		}

	}

	if (controlsArray[2]){  // up

		if(topVar > 0){

			topVar = topVar-rocketSpeed;

		}

	}

	if (controlsArray[3]){  // right

		if (leftVar <= playAreaWidth) {

			leftVar = leftVar+rocketSpeed; 

			if (rocketSrcEndNumber < 11) {

				rocketAnimCooldown++;

				if (rocketAnimCooldown == turnRate) {

					rocketSrcEndNumber++;
					rocketAnimCooldown = 0;

				}

			}

		} 

	}

	if (controlsArray[4]){  // down

		if (topVar <= playAreaHeight) {

			topVar = topVar+rocketSpeed;

		} 

	}

	if ((controlsArray[1] && controlsArray[3]) ^ (!controlsArray[1] && !controlsArray[3])) { // no movement horizontally

		rocketAnimCooldown++;

		if (rocketAnimCooldown == turnRate) {

			if (rocketSrcEndNumber > 6) {rocketSrcEndNumber--}
			if (rocketSrcEndNumber < 6) {rocketSrcEndNumber++}
			rocketAnimCooldown = 0;	

		}

	}

	rocket.src = 'assets/smallfighter/smallfighter' + rocketSrcEndNumber + '.png';
	updateRocketPosition();
}

function updateRocketPosition() {

	rocketContainer.style.left = leftVar + 'px';
	rocketContainer.style.top = topVar + 'px';
	rocket.style.transform = 'rotate(' + rocketAngle + 'deg) translate(-50%, -50%)';

}


function updateScore() {

	document.getElementById('score').innerHTML = score + ' points!';

}

function loseLife() {
	//console.log('life lost');
	//return;
	if (checkIfControls == 0) {
		return;
	}

	checkIfControls = 0;
	rocket.src = 'assets/explosions/explosion.gif';
	playPlayerDeathSound(vol);
	
	setTimeout(function() {

			if (currentLives == 0) {

				playArea.innerHTML = '';
				header.innerHTML = ' GAME OVER! Your score is : ' + score;
				lost = 1;
				return false;

			}

			currentLives--;
			adjustCurrentLives(currentLives);
			removeAll();
			topVar = 500;
			leftVar = 200;
			animationTimer = 0;
			rocketAngle = 90;
			checkIfExecuted = 0;
			checkIfControls = 0;
			controlsArray = [0,0,0,0,0,0]; //[start,left,up,right,down,fire] start is changed in controls.js
			deltaT = 0;
			fireCooldown = 0;
			progressionTimer = 1;
			spawnTimer = 0;
			fasterStarsY = 0;
			fastStarsY = 0;
			backgroundY = 0;
			backgroundContainerY = 0;
			fasterStars.style.backgroundPositionY = fasterStarsY + 'px';
			fastStars.style.backgroundPositionY = fastStarsY + 'px';
			playArea.style.backgroundPositionY = backgroundY + 'px';
			playAreaContainer.style.backgroundPositionY = backgroundContainerY + 'px';
			updateRocketPosition();
			//vol = volumeSlider.value / 100;
			soundtrack = 'inBase';
			playSoundtrack(soundtrack);
	}, 1270);
	

}

function removeAll() {

	rocket.src = 'assets/smallfighter/smallfighter6.png';

	[].forEach.call(document.querySelectorAll('.enemyContainer'),function(enemy){
		enemy.parentNode.removeChild(enemy);
	});

	[].forEach.call(document.querySelectorAll('.weaponContainer'),function(weapon){
		weapon.parentNode.removeChild(weapon);
	});

	[].forEach.call(document.querySelectorAll('.enemyWeaponContainer'),function(weapon){
		weapon.parentNode.removeChild(weapon);
	});

	[].forEach.call(document.querySelectorAll('.bonusContainer'),function(bonus){
		bonus.parentNode.removeChild(bonus);
	});
}


function moveBackground() {

	if (checkIfControls == 1) {

		fasterStars.style.backgroundPositionY = fasterStarsY + 'px';
		fasterStarsY += 5;

		fastStars.style.backgroundPositionY = fastStarsY + 'px';
		fastStarsY += 1.8;

		playArea.style.backgroundPositionY = backgroundY + 'px';
		backgroundY += 1.5;

		playAreaContainer.style.backgroundPositionY = backgroundContainerY + 'px';
		backgroundContainerY += 1.2;

	}
	
}


var imageAssetsList = new Array();
function preloadImages() {
	for (i = 0; i < preloadImages.arguments.length; i++) {
		imageAssetsList[i] = new Image();
		imageAssetsList[i].src = preloadImages.arguments[i];
	}
}
preloadImages(
	'assets/background/backgroundSpaceSeamless.png',
	'assets/background/fasterStars.png',
	'assets/background/fastStars.png',
	'assets/background/stars.png',
	'assets/bonuses/bulletSideUpgrade.png',
	'assets/bonuses/bulletUpgrade.png',
	'assets/enemies/enemy1.png',
	'assets/enemies/enemy2.png',
	'assets/enemies/enemy3.png',
	'assets/enemies/enemy4.png',
	'assets/enemies/enemy5.png',
	'assets/explosions/explosion.gif',
	'assets/mothership/mothership.png',
	'assets/smallfighter/smallfighter1.png',
	'assets/smallfighter/smallfighter2.png',
	'assets/smallfighter/smallfighter3.png',
	'assets/smallfighter/smallfighter4.png',
	'assets/smallfighter/smallfighter5.png',
	'assets/smallfighter/smallfighter6.png',
	'assets/smallfighter/smallfighter7.png',
	'assets/smallfighter/smallfighter8.png',
	'assets/smallfighter/smallfighter9.png',
	'assets/smallfighter/smallfighter10.png',
	'assets/smallfighter/smallfighter11.png',
	'assets/weapons/bullet.png',
	'assets/weapons/flame.gif',

);

var audioAssetsList = new Array();
function preloadAudio() {
	for (i = 0; i < preloadAudio.arguments.length; i++) {
		audioAssetsList[i] = new Audio();
		audioAssetsList[i].src = preloadAudio.arguments[i];
		audioAssetsList[i].preload = 'auto';
	}
}
preloadAudio(
	'assets/sound/bonus/bonus.wav',
	'assets/sound/bonus/getBonus2.wav',
	'assets/sound/enemyDeath/enemyDeath1.wav',
	'assets/sound/enemySpawn/mothershipSpawn.wav',
	'assets/sound/hit/hit1.wav',
	'assets/sound/playerDeath/playerDeath1.wav',
	'assets/sound/weapon/bullet.wav',
	'assets/sound/weapon/enemyFire1.wav',
	'assets/sound/weapon/plasma1.wav',
);
/* doesn't work, preloaded separately as variables in sounds.js
var soundtrackAssetsList = new Array();
function preloadSoundtrack() {
	for (i = 0; i < preloadSoundtrack.arguments.length; i++) {
		soundtrackAssetsList[i] = new Audio();
		soundtrackAssetsList[i].src = preloadSoundtrack.arguments[i];
		soundtrackAssetsList[i].preload = 'auto';
}

preloadSoundtrack(
	'assets/sound/GIVE CREDIT/www.bensound.com/bensound-evolution.mp3',
	'assets/sound/GIVE CREDIT/www.bensound.com/bensound-extremeaction.mp3'
);
*/