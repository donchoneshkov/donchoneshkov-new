var track1 = new Audio('assets/sound/GIVE CREDIT/www.bensound.com/bensound-evolution.mp3');
var track2 = new Audio('assets/sound/GIVE CREDIT/www.bensound.com/bensound-extremeaction.mp3');
track1.loop = true;
track2.loop = true;
track1.preload = 'auto';
track2.preload = 'auto';
var vol = 1;
var soundtrack = 'inBase';
var volumeSlider = document.getElementById('volumeSlider');

function playBulletSound(vol) {
	
	var sound = new Audio('assets/sound/weapon/bullet.wav');
	sound.volume = vol;
	sound.play();

	
}

function playEnemyBulletSound(vol) {
	
	var sound = new Audio('assets/sound/weapon/enemyFire1.wav');
	sound.volume = vol;
	sound.play();
	
}

function playPlasmaSound(vol) {
	
	var sound = new Audio('assets/sound/weapon/plasma1.wav');
	sound.volume = vol;
	sound.play();
	
}

function playHitSound(vol) {
	
	var sound = new Audio('assets/sound/hit/hit1.wav');
	sound.volume = vol;
	sound.play();
	
}

function playPlayerDeathSound(vol) {
	
	var sound = new Audio('assets/sound/playerDeath/playerDeath1.wav');
	sound.volume = vol;
	sound.play();
	
}

function playEnemyDeathSound(vol) {
	
	var sound = new Audio('assets/sound/enemyDeath/enemyDeath1.wav');
	sound.volume = vol;
	sound.play();
	
}

function playSpawnBonusSound(vol) {
	
	var sound = new Audio('assets/sound/bonus/bonus.wav');
	sound.volume = vol;
	sound.play();
	
}

function playBonusTakenSound(vol) {
	
	var sound = new Audio('assets/sound/bonus/getBonus2.wav');
	sound.volume = vol;
	sound.play();
	
}

function playMothershipSpawnSound(vol) {
	
	var sound = new Audio('assets/sound/enemySpawn/mothershipSpawn.wav');
	sound.volume = vol;
	sound.play();
	
}

function playSoundtrack(soundtrack) {


	switch(soundtrack) {
		case 'inBase':
			track1.volume = vol;
			track1.play();
			track2.pause();
			track2.currentTime = 0;
			break;

		case 'inFlight':
			track2.volume = vol;
			track2.play();
			track1.pause();
			track1.currentTime = 0;
			break;

		case 'stopSound':
			track1.pause();
			track2.pause();
			break;

		default :
			track1.volume = vol;
			track1.play();
			track2.pause();
			track2.currentTime = 0; 
	}

}

function soundOff() {
	soundControl.innerHTML = 'Sound OFF';
	vol = 0;
	playSoundtrack('stopSound');
}

function soundOn() {
	soundControl.innerHTML = 'Sound ON';
	vol = volumeSlider.value / 100;
	playSoundtrack(soundtrack);

}

soundControl.onclick = function() {
	if (vol == 0 && soundControl.innerHTML == 'Sound OFF') {
		soundOn();
	} else {
		soundOff();
	}

};

volumeSlider.addEventListener('input', function(){

	if (soundControl.innerHTML == 'Sound ON') {
		
		vol = volumeSlider.value / 100;
		playSoundtrack(soundtrack);
	}
});

