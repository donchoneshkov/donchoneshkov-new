

function spawnEnemy(progressionTimer) {

	if (progressionTimer > 100) {

		spawnSaucerTimer++;

		if (spawnSaucerTimer % 50 == 0 && Math.random() < spawnRate) { 

			spawnSaucerTimer = 0;

			var newEnemy = document.createElement('img');

			newEnemy.setAttribute('src', 'assets/enemies/enemy' + (Math.floor(Math.random()*5) + 1) + '.png');
			newEnemy.setAttribute('height', '50px');
			newEnemy.setAttribute('width', '50px');
			newEnemy.setAttribute('alt', 'Enemy');
			newEnemy.setAttribute('class', 'enemy saucer');

			var enemyContainer = document.createElement('span');
			enemyContainer.setAttribute('height', '1px');
			enemyContainer.setAttribute('width', '1px');
			enemyContainer.setAttribute('points', 50);
			enemyContainer.setAttribute('class', 'enemyContainer saucerContainer');
			enemyContainer.setAttribute('hp', 5);
			enemyContainer.style.left = 200 + (Math.floor(Math.random()*681) + 1) + 'px';
			enemyContainer.style.top = 0 + 'px';

			enemyContainer.appendChild(newEnemy);
			playArea.appendChild(enemyContainer);

		}

	}

	if (progressionTimer > 10000) {

		spawnMothershipTimer++;

		if (spawnMothershipTimer > 1500 && Math.random() < spawnRate) { 

			spawnMothershipTimer = 0;

			var newEnemy = document.createElement('img');

			newEnemy.setAttribute('src', 'assets/mothership/mothership.png');
			newEnemy.setAttribute('height', '100px');
			newEnemy.setAttribute('width', '100px');
			newEnemy.setAttribute('alt', 'Enemy');
			newEnemy.setAttribute('class', 'enemy mothership');

			var enemyContainer = document.createElement('span');
			enemyContainer.setAttribute('height', '1px');
			enemyContainer.setAttribute('width', '1px');
			enemyContainer.setAttribute('points', 250);
			enemyContainer.setAttribute('class', 'enemyContainer mothershipContainer');
			enemyContainer.setAttribute('hp', 150);
			enemyContainer.style.left = 200 + (Math.floor(Math.random()*431) + 1) + 'px';
			enemyContainer.style.top = 0 + 'px';

			enemyContainer.appendChild(newEnemy);
			playArea.appendChild(enemyContainer);

			playMothershipSpawnSound(vol);

		}

	}

}

function animateEnemy() {

	let enemies = document.getElementsByClassName('enemyContainer');

	Array.prototype.forEach.call(enemies, function(el, index) {
		if (!el.classList.contains('dying')) {
	    	let posTop = el.style.top;


	    	switch (true) {

			    case el.classList.contains('saucerContainer'):

				    el.style.top = Number(posTop.substr(0, posTop.length-2)) + enemyTopSpeed + 'px';
				   	
				    if(Math.random() < 0.2) {

					    if (Number(posTop.substr(0, posTop.length-2)) % 100 <= 50 && Math.random() < 0.5) {

					    	let posLeft = el.style.left;

					    	if (Number(posLeft.substr(0, posLeft.length-2)) < 755) {

					    		el.style.left = Number(posLeft.substr(0, posLeft.length-2)) + enemySideSpeed + 'px';

					    	}

					    } else {

					    	let posLeft = el.style.left;

					    	if (Number(posLeft.substr(0, posLeft.length-2)) > 25) {

					    		el.style.left = Number(posLeft.substr(0, posLeft.length-2)) - enemySideSpeed + 'px';

					    	}

					    }
				  
					}

					if (Math.random() < enemyBulletFireRate) {
						let left = Number(el.style.left.substr(0, el.style.left.length-2));
						let top = Number(el.style.top.substr(0, el.style.top.length-2));
						enemyFire('bullet', left, top);
					}


					break;

				case (el.classList.contains('mothershipContainer')):

					el.style.top = Number(posTop.substr(0, posTop.length-2)) + enemyTopSpeed/2 + 'px';

					if (Math.random() < enemyPlasmaFireRate) {
						let left = Number(el.style.left.substr(0, el.style.left.length-2));
						let top = Number(el.style.top.substr(0, el.style.top.length-2));
						enemyFire('plasma', left, top);
					}

					break;

			} 
			
			if (Number(posTop.substr(0, posTop.length-2)) > 750) {

				loseLife();

			}
			
		}

	});

}


function removeEnemy() {

	[].forEach.call(document.querySelectorAll('.removeEnemy'),function(enemy){

		enemy.parentNode.removeChild(enemy);
		score += Number(enemy.getAttribute('points'));

	});

}

function killAnimation() {

	[].forEach.call(document.querySelectorAll('.killEnemy'),function(enemy){

		if (enemy.firstChild.getAttribute('src') != 'assets/explosions/explosion.gif') {
			
			enemy.firstChild.setAttribute('src', 'assets/explosions/explosion.gif');
			enemy.classList.remove('killEnemy');
			enemy.classList.add('dying');
			playEnemyDeathSound(vol);
			
			setTimeout(function() {
				enemy.classList.add('removeEnemy');		
			}, 270);

		}

	});

	
}








