function detectCollision() {

	let bullets = document.querySelectorAll('.weaponContainer');
	var bulletsPosArray = [[0,0]];
	var enemiesPosArray = [[0,0]];
	var enemySizeArray = [[0,0]];

	Array.prototype.forEach.call(bullets, function(el, index) {
			
		bulletsPosArray[0] = [Number(el.style.left.substr(0, el.style.left.length-2)), Number(el.style.top.substr(0, el.style.top.length-2))];

		let enemies = document.querySelectorAll('.enemyContainer');
		let currentBullet = el;
		//console.log(enemies);
		Array.prototype.forEach.call(enemies, function(el, index) {
			enemySizeArray[0] = [Number(el.firstChild.width), Number(el.firstChild.height)];
			//console.log(enemySizeArray);
			enemiesPosArray[0] = [Number(el.style.left.substr(0, el.style.left.length-2)), Number(el.style.top.substr(0, el.style.top.length-2))];

			if (bulletsPosArray[0][0] - enemiesPosArray[0][0] > 0 - enemySizeArray[0][0] / 2) {
				if (bulletsPosArray[0][0] - enemiesPosArray[0][0] < enemySizeArray[0][0] / 2) {
					if (bulletsPosArray[0][1] - enemiesPosArray[0][1] > 0 - enemySizeArray[0][1] / 2) {
						if (bulletsPosArray[0][1] - enemiesPosArray[0][1] < enemySizeArray[0][1] / 2) {

							if (Number(el.getAttribute('hp')) > 0 ) {
								el.setAttribute('hp', (Number(el.getAttribute('hp'))) - 1);
							} else { el.classList.add('killEnemy'); }
							currentBullet.classList.add('removeWeapon');
							playHitSound(vol);
							
						}
					}
				}
			}
			
		});

	});

}



function detectEnemyCollision() {
	
	var enemiesPosArray = [[0,0]];

	let enemies = document.querySelectorAll('.enemyContainer');
	
	Array.prototype.forEach.call(enemies, function(el, index) {
	
		let enemySizeArray = [0,0];
		enemySizeArray[0] = [Number(el.firstChild.width), Number(el.firstChild.height)];

		enemiesPosArray[0] = [Number(el.style.left.substr(0, el.style.left.length-2)), Number(el.style.top.substr(0, el.style.top.length-2))];
		

		if (leftVar - enemiesPosArray[0][0] > 0 - enemySizeArray[0][0] / 2) {
			if (leftVar - enemiesPosArray[0][0] < enemySizeArray[0][0] / 2) {
				if (topVar - enemiesPosArray[0][1] > 0 - enemySizeArray[0][1] / 2) {
					if (topVar - enemiesPosArray[0][1] < enemySizeArray[0][1] / 2) {

						loseLife();
						//console.log('collision');
					}
				}
			}
		}

	});

}


function detectFriendlyCollision() {
	
	var bonusPosArray = [[0,0]];

	let bonus = document.querySelectorAll('.bonusContainer');
	
	Array.prototype.forEach.call(bonus, function(el, index) {
	
		bonusPosArray[0] = [Number(el.style.left.substr(0, el.style.left.length-2)), Number(el.style.top.substr(0, el.style.top.length-2))];

		if (leftVar - bonusPosArray[0][0] > -35) {
			if (leftVar - bonusPosArray[0][0] < 35) {
				if (topVar - bonusPosArray[0][1] > -35) {
					if (topVar - bonusPosArray[0][1] < 35) {

						if (el.classList.contains('bulletUpgrade')) {

							el.classList.add('removeBonus');
							bonusTaken('bulletUpgrade');

						}

						if (el.classList.contains('bulletSideUpgrade')) {

							el.classList.add('removeBonus');
							bonusTaken('bulletSideUpgrade');

						}

						playBonusTakenSound(vol);
						
					}
				}
			}
		}

	});

}

function detectEnemyWeaponCollision() {

	let enemyWeapons = document.querySelectorAll('.enemyWeaponContainer');
	var enemyWeaponsPosArray = [[0,0]];

	Array.prototype.forEach.call(enemyWeapons, function(el, index) {
			
		enemyWeaponsPosArray[0] = [Number(el.style.left.substr(0, el.style.left.length-2)), Number(el.style.top.substr(0, el.style.top.length-2))];

		let enemies = document.querySelectorAll('.enemyContainer');
		let currentWeapon = el;
		let enemyWeaponSize = [0,0];
		enemyWeaponSize[0] = [el.firstChild.width, el.firstChild.height];

			if (enemyWeaponsPosArray[0][0]  - leftVar > 0 - enemyWeaponSize[0][0] / 2) {
				if (enemyWeaponsPosArray[0][0] - leftVar < enemyWeaponSize[0][0] / 2) {
					if (enemyWeaponsPosArray[0][1] - topVar > 0 - enemyWeaponSize[0][1] / 2) {
						if (enemyWeaponsPosArray[0][1] - topVar < enemyWeaponSize[0][1] / 2) {
							
							currentWeapon.classList.add('removeWeapon');
							loseLife();
							//console.log('hit');

						}
					}
				}
			}

	});

}