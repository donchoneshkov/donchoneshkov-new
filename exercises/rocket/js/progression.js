var progressionTimer = 1;

var enemyFireCooldown = 1;
var enemyBulletFireRate = 250;
var enemyPlasmaFireRate = 100;

var enemyTopSpeed = 1.5;
var enemySideSpeed = 1.5;
var spawnRate = 0.3;

var turnRate = 2;
var rocketSpeed = 10;
var fireCooldown = 0;
var sideFireCooldown = 0;
var weapon = 'bullet';
var sideWeapon = 0;

var spawnSaucerTimer = 0;
var spawnMothershipTimer = 0;

var backgroundY = 0;
var backgroundContainerY = 0;
var fastStarsY = 0;
var fasterStarsY = 0;

var cheating = 0;



function progression() {
	if (progressionTimer % 5000 == 0) {enemySideSpeed++;}

	if (progressionTimer % 10000 == 0) {spawnRate += 0.1;}

	if (progressionTimer % 12500 == 0) {enemyTopSpeed += 0.5;}

	if (progressionTimer % 500 == 0 && enemyBulletFireRate > 50) {enemyBulletFireRate--;}

	if (progressionTimer % 2500 == 0 && enemyPlasmaFireRate > 25) {enemyPlasmaFireRate -= 5;}
}

