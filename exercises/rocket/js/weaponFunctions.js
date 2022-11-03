function fireWeapon(weapon) {
	
	switch (weapon) {

		case 'bullet':
			fireBullet();
			break;

		case 'tripleBullet':
			fireTripleBullet();
			break;

		case 'quintupleBullet':
			fireQuintupleBullet();
			break;

		case 'septupleBullet':
			fireSeptupleBullet();
			break;

	}
}

function fireSideWeapon(sideWeapon) {
	
	switch (sideWeapon) {

		case 'sideBullet':
			fireSideBullet();
			break;

		default:
			break;

	}
}




function fireBullet() {

	if (fireCooldown == 15) {fireCooldown = 0}

	if (fireCooldown % 3 == 0) {
		
		var newBullet = document.createElement('img');

		newBullet.setAttribute('src', 'assets/weapons/bullet.png');
		newBullet.setAttribute('height', '20px');
		newBullet.setAttribute('width', '30px');
		newBullet.setAttribute('alt', 'Bullet');
		newBullet.setAttribute('class', 'bullet');

		var weaponContainer = document.createElement('span');
		weaponContainer.setAttribute('height', '1px');
		weaponContainer.setAttribute('width', '1px');
		weaponContainer.setAttribute('class', 'weaponContainer');
		weaponContainer.style.left = leftVar + 'px';
		weaponContainer.style.top = topVar - 60 + 'px';

		weaponContainer.appendChild(newBullet);
		playArea.appendChild(weaponContainer);

		playBulletSound(vol);

	}

	fireCooldown++;

}


function fireTripleBullet() {

	if (fireCooldown == 15) {fireCooldown = 0}

	if (fireCooldown % 4 == 0) {
		for (var i = 1; i < 4; i++) {
			var newBullet = document.createElement('img');

			newBullet.setAttribute('src', 'assets/weapons/bullet.png');
			newBullet.setAttribute('height', '20px');
			newBullet.setAttribute('width', '30px');
			newBullet.setAttribute('alt', 'Bullet');
			newBullet.setAttribute('class', 'bullet');

			var weaponContainer = document.createElement('span');
			weaponContainer.setAttribute('height', '1px');
			weaponContainer.setAttribute('width', '1px');
			weaponContainer.setAttribute('class', 'weaponContainer');
			if (i == 1) {
				weaponContainer.style.left = leftVar - (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}
			if (i == 2) {
				weaponContainer.style.left = leftVar + 'px';
				weaponContainer.style.top = topVar - 60 - (1*8) + 'px';
			}
			if (i == 3) {
				weaponContainer.style.left = leftVar + (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}

			weaponContainer.appendChild(newBullet);
			playArea.appendChild(weaponContainer);

		}

		playBulletSound(vol);

	}

	fireCooldown++;

}

function fireQuintupleBullet() {

	if (fireCooldown == 15) {fireCooldown = 0}

	if (fireCooldown % 5 == 0) {
		for (var i = 1; i < 6; i++) {
			var newBullet = document.createElement('img');

			newBullet.setAttribute('src', 'assets/weapons/bullet.png');
			newBullet.setAttribute('height', '20px');
			newBullet.setAttribute('width', '30px');
			newBullet.setAttribute('alt', 'Bullet');
			newBullet.setAttribute('class', 'bullet');

			var weaponContainer = document.createElement('span');
			weaponContainer.setAttribute('height', '1px');
			weaponContainer.setAttribute('width', '1px');
			weaponContainer.setAttribute('class', 'weaponContainer');
			if (i == 1) {
				weaponContainer.style.left = leftVar - (8*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (1*8) + 'px';
			}
			if (i == 2) {
				weaponContainer.style.left = leftVar - (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}
			if (i == 3) {
				weaponContainer.style.left = leftVar + 'px';
				weaponContainer.style.top = topVar - 60 - (1*8) + 'px';
			}
			if (i == 4) {
				weaponContainer.style.left = leftVar + (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}
			if (i == 5) {
				weaponContainer.style.left = leftVar + (8*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (1*8) + 'px';
			}

			weaponContainer.appendChild(newBullet);
			playArea.appendChild(weaponContainer);

		}

		playBulletSound(vol);

	}

	fireCooldown++;

}

function fireSeptupleBullet() {

	if (fireCooldown == 15) {fireCooldown = 0}

	if (fireCooldown % 5 == 0) {
		for (var i = 1; i < 8; i++) {
			var newBullet = document.createElement('img');

			newBullet.setAttribute('src', 'assets/weapons/bullet.png');
			newBullet.setAttribute('height', '20px');
			newBullet.setAttribute('width', '30px');
			newBullet.setAttribute('alt', 'Bullet');
			newBullet.setAttribute('class', 'bullet');

			var weaponContainer = document.createElement('span');
			weaponContainer.setAttribute('height', '1px');
			weaponContainer.setAttribute('width', '1px');
			weaponContainer.setAttribute('class', 'weaponContainer');
			if (i == 1) {
				weaponContainer.style.left = leftVar - (12*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (2*8) + 'px';
			}
			if (i == 2) {
				weaponContainer.style.left = leftVar - (8*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (1*8) + 'px';
			}
			if (i == 3) {
				weaponContainer.style.left = leftVar - (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}
			if (i == 4) {
				weaponContainer.style.left = leftVar + 'px';
				weaponContainer.style.top = topVar - 60 - (1*8) + 'px';
			}
			if (i == 5) {
				weaponContainer.style.left = leftVar + (4*3) + 'px';
				weaponContainer.style.top = topVar - 60 + 'px';
			}
			if (i == 6) {
				weaponContainer.style.left = leftVar + (8*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (1*8) + 'px';
			}
			
			if (i == 7) {
				weaponContainer.style.left = leftVar + (12*3) + 'px';
				weaponContainer.style.top = topVar - 60 + (2*8) + 'px';
			}

			weaponContainer.appendChild(newBullet);
			playArea.appendChild(weaponContainer);

		}

		playBulletSound(vol);

	}

	fireCooldown++;

}

function fireSideBullet() {

	if (sideFireCooldown == 15) {sideFireCooldown = 0}

	if (sideFireCooldown % 5 == 0) {

		for (var i = 1; i < 3; i++) {

			if (i == 1) {
			
				var newBullet = document.createElement('img');

				newBullet.setAttribute('src', 'assets/weapons/bullet.png');
				newBullet.setAttribute('height', '20px');
				newBullet.setAttribute('width', '30px');
				newBullet.setAttribute('alt', 'Bullet');
				newBullet.setAttribute('class', 'sideBulletLeft');


				var weaponContainer = document.createElement('span');
				weaponContainer.setAttribute('height', '1px');
				weaponContainer.setAttribute('width', '1px');
				weaponContainer.setAttribute('class', 'weaponContainer sideWeaponContainer sideWeaponContainerLeft');
				weaponContainer.style.left = leftVar - (16*3) + 'px';
				weaponContainer.style.top = topVar - 50 + (2*8) + 'px';

				weaponContainer.appendChild(newBullet);
				playArea.appendChild(weaponContainer);
			}

			if (i == 2) {
			
				var newBullet = document.createElement('img');

				newBullet.setAttribute('src', 'assets/weapons/bullet.png');
				newBullet.setAttribute('height', '20px');
				newBullet.setAttribute('width', '30px');
				newBullet.setAttribute('alt', 'Bullet');
				newBullet.setAttribute('class', 'sideBulletRight');


				var weaponContainer = document.createElement('span');
				weaponContainer.setAttribute('height', '1px');
				weaponContainer.setAttribute('width', '1px');
				weaponContainer.setAttribute('class', 'weaponContainer sideWeaponContainer sideWeaponContainerRight');
				weaponContainer.style.left = leftVar + (16*3) + 'px';
				weaponContainer.style.top = topVar - 50 + (2*8) + 'px';
				weaponContainer.appendChild(newBullet);
				playArea.appendChild(weaponContainer);
			}

		}
	}

	sideFireCooldown++;

}


function animateBullet(){

	let bullets = document.getElementsByClassName('weaponContainer');

	Array.prototype.forEach.call(bullets, function(el, index) {

	    let posTop = el.style.top;
	    let posLeft = el.style.left;

	    if (el.classList.contains('sideWeaponContainerLeft')) {

	    	el.style.top = Number(posTop.substr(0, posTop.length-2)) - 7 + 'px';
	    	el.style.left = Number(posLeft.substr(0, posLeft.length-2)) - 10 + 'px';

	    } else if (el.classList.contains('sideWeaponContainerRight')) {

	    	el.style.top = Number(posTop.substr(0, posTop.length-2)) - 7 + 'px';
	    	el.style.left = Number(posLeft.substr(0, posLeft.length-2)) + 10 + 'px';

	    } else {

	    	el.style.top = Number(posTop.substr(0, posTop.length-2)) - 15 + 'px';

		}

	    if (Number(posTop.substr(0, posTop.length-2)) < -50) {

	    	el.classList.add('removeWeapon');

	    }

	});

}



function removeWeapon() {

	[].forEach.call(document.querySelectorAll('.removeWeapon'),function(weapon){

		weapon.parentNode.removeChild(weapon);

	});

}

function enemyFire(enemyWeapon, left, top) {

	var weaponSrc = '';

	switch(enemyWeapon) {

		case 'bullet':
			weaponSrc = 'assets/weapons/bullet.png';
			if (enemyFireCooldown > 1000) {
				enemyFireCooldown = 1;
			}
			if (enemyFireCooldown % enemyBulletFireRate == 0) {
				fireEnemyBullet(weaponSrc, left, top);
			}
			enemyFireCooldown++;
		break;

		case 'plasma':
			weaponSrc = 'assets/weapons/flame.gif';
			if (enemyFireCooldown > 1000) {
				enemyFireCooldown = 1;
			}
			if (enemyFireCooldown % enemyPlasmaFireRate == 0) {
				fireEnemyPlasma(weaponSrc, left, top);
			}
			enemyFireCooldown++;
		break;

		default:
			weaponSrc = 'assets/weapons/bullet.png';
			fireEnemyBullet(weaponSrc, left, top);

	}
	
}

function fireEnemyBullet(src, left, top) {

	var newBullet = document.createElement('img');

	newBullet.setAttribute('src', src);
	newBullet.setAttribute('height', '20px');
	newBullet.setAttribute('width', '30px');
	newBullet.setAttribute('alt', 'Bullet');
	newBullet.setAttribute('class', 'enemyBullet');

	var weaponContainer = document.createElement('span');
	weaponContainer.setAttribute('height', '1px');
	weaponContainer.setAttribute('width', '1px');
	weaponContainer.setAttribute('class', 'enemyBulletContainer enemyWeaponContainer');
	weaponContainer.style.left = left + 'px';
	weaponContainer.style.top = top + 'px';

	weaponContainer.appendChild(newBullet);
	playArea.appendChild(weaponContainer);

	playEnemyBulletSound(vol);

}

function fireEnemyPlasma(src, left, top) {

	var newPlasma = document.createElement('img');

	newPlasma.setAttribute('src', src);
	newPlasma.setAttribute('height', '90px');
	newPlasma.setAttribute('width', '60px');
	newPlasma.setAttribute('alt', 'Plasma');
	newPlasma.setAttribute('class', 'enemyPlasma');

	var weaponContainer = document.createElement('span');
	weaponContainer.setAttribute('height', '1px');
	weaponContainer.setAttribute('width', '1px');
	weaponContainer.setAttribute('class', 'enemyPlasmaContainer enemyWeaponContainer');
	weaponContainer.style.left = left + 5 + 'px';
	weaponContainer.style.top = top + 'px';

	weaponContainer.appendChild(newPlasma);
	playArea.appendChild(weaponContainer);

	playPlasmaSound(vol);

}


function animateEnemyWeapon(){

	let bullets = document.getElementsByClassName('enemyBulletContainer');

	Array.prototype.forEach.call(bullets, function(el, index) {

	    let posTop = el.style.top;
	    el.style.top = Number(posTop.substr(0, posTop.length-2)) + 8 + 'px';

	    if (Number(posTop.substr(0, posTop.length-2)) > 750) {

	    	el.classList.add('removeWeapon');

	    }

	});

	let plasma = document.getElementsByClassName('enemyPlasmaContainer');

	Array.prototype.forEach.call(plasma, function(el, index) {

	    let posTop = el.style.top;
	    el.style.top = Number(posTop.substr(0, posTop.length-2)) + 5 + 'px';

	    if (Number(posTop.substr(0, posTop.length-2)) > 850) {

	    	el.classList.add('removeWeapon');

	    }

	});

}
