
function bonusTaken(bonus) {
	switch (bonus) {

		case 'bulletUpgrade':

			switch (weapon) {

				case 'bullet':
					weapon = 'tripleBullet';
					break;

				case 'tripleBullet':
					weapon = 'quintupleBullet';
					break;

				case 'quintupleBullet':
					weapon = 'septupleBullet';
					break;

				default:
					
					break;

			}

			break;

		case 'bulletSideUpgrade': 
			case 0:
					sideWeapon = 'sideBullet';
				break;

			default:

				break;

			break;
	}
}



function spawnBonus(progressionTimer) {
	
	if (progressionTimer > 100) {

		if (progressionTimer % 1500 == 0 && Math.random() < 0.5) {

			var newBonus = document.createElement('img');

			newBonus.setAttribute('src', 'assets/bonuses/bulletUpgrade.png');
			newBonus.setAttribute('height', '50px');
			newBonus.setAttribute('width', '50px');
			newBonus.setAttribute('alt', 'Bonus');
			newBonus.setAttribute('class', 'bonus');

			var bonusContainer = document.createElement('span');
			bonusContainer.setAttribute('height', '1px');
			bonusContainer.setAttribute('width', '1px');
			bonusContainer.setAttribute('class', 'bonusContainer bulletUpgrade');
			bonusContainer.style.left = 200 + (Math.floor(Math.random()*681) + 1) + 'px';
			bonusContainer.style.top = 0 + 'px';

			bonusContainer.appendChild(newBonus);
			playArea.appendChild(bonusContainer);

			playSpawnBonusSound(vol);

		}

	}

	if (progressionTimer > 1000) {

		if (progressionTimer % 2500 == 0 && Math.random() < 0.3) {

			var newBonus = document.createElement('img');

			newBonus.setAttribute('src', 'assets/bonuses/bulletSideUpgrade.png');
			newBonus.setAttribute('height', '50px');
			newBonus.setAttribute('width', '50px');
			newBonus.setAttribute('alt', 'Bonus');
			newBonus.setAttribute('class', 'bonus');

			var bonusContainer = document.createElement('span');
			bonusContainer.setAttribute('height', '1px');
			bonusContainer.setAttribute('width', '1px');
			bonusContainer.setAttribute('class', 'bonusContainer bulletSideUpgrade');
			bonusContainer.style.left = 200 + (Math.floor(Math.random()*681) + 1) + 'px';
			bonusContainer.style.top = 0 + 'px';

			bonusContainer.appendChild(newBonus);
			playArea.appendChild(bonusContainer);

			playSpawnBonusSound(vol);

		}

	}

}



function animateBonus(){

	let bonuses = document.getElementsByClassName('bonusContainer');

	Array.prototype.forEach.call(bonuses, function(el, index) {

	    let posTop = el.style.top;
	    el.style.top = Number(posTop.substr(0, posTop.length-2)) + 3 + 'px';

	    if (Number(posTop.substr(0, posTop.length-2)) > 750) {

	    	el.classList.add('removeBonus');

	    }

	});

}


function removeBonus() {

	[].forEach.call(document.querySelectorAll('.removeBonus'),function(bonus){

		bonus.parentNode.removeChild(bonus);

	});

}

