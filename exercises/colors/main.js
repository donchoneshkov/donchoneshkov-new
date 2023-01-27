var playingField = document.getElementById('playingField');
var colorsBackground = document.getElementById('colorsBackground');
var colors = [];
var colorLimit = 0;
var flashes = [];
var flashesLimit = 0;
var pallette =  [
                "black",
                "red",
                "blue",
                "green",
                "yellow",
                "orange",
                "purple",
                "pink",
                "brown"
                ];
var level = 1;
var hasTrapWords = false;

var guess = 0;
var isShowingFlashes = false;
var colorButtonsTarget = document.getElementById('colorButtonsDiv');
var flashesTarget = document.getElementById('colorsBackground');
var feedback = document.getElementById('feedback');
resizeGameArea();
window.addEventListener('resize', resizeGameArea);
loadNextLevel(level);

// resize gaming square where the words flash, need to bind event on window resize
function resizeGameArea() {
    playingField.style.width = window.innerWidth * 0.8 + 'px';
    playingField.style.height = window.innerHeight/2 + 'px';
    colorsBackground.style.width = '100%';
    colorsBackground.style.height = '100%';
}
// populate colors array
function populateColors(level) {
    colors = [""];
    colorLimit = 0;
    if (level + 2 <= 8) {
        colorLimit = Math.ceil(level + 2 / 2);
    } else { 
        colorLimit = 8 
    }
    //console.log(colorLimit);
    flashesLimit = 0;
    if (flashesLimit + level < 4) {
        flashesLimit = 4;
    } else {
        flashesLimit = flashesLimit + level;
    }

    for (i = 0; i < flashesLimit; i++) {
        let pickColor = Math.floor(Math.random() * (colorLimit + 1));
        //console.log(pickColor);
        colors[i] = pallette[pickColor];
    }
}
// populate flashes array
function populateFlashes() {
    if (level < 6) {
        hasTrapWords = false;
    }
    if (level >= 6) {
        hasTrapWords = true;
    }

    for (i = 0; i < flashesLimit; i++) {
        let randomColor = Math.floor(Math.random() * (colors.length));
        console.log(randomColor);
        flashes[i] = colors[randomColor]; 
    }
    console.log(flashes);
}

function populateColorButtons() {
        colorButtonsTarget.innerHTML = "";
    for (i = 0; i < colorLimit + 1; i++) {
        let button = document.createElement('button');
        button.innerHTML = pallette[i];
        //button.classList.add(pallette[i]);
        button.setAttribute ("onClick", "guessFlash('"+pallette[i]+"')");
        colorButtonsTarget.appendChild(button);
    }
}

function clearColorButtons() {
    colorButtonsTarget.innerHTML = "";
}

function flash(hasTrapWords) {
    if (isShowingFlashes) {
        return;
    } else {
        isShowingFlashes = true;
    }
    for (i = 0; i < flashes.length; i++) {
        (function(i){
            setTimeout( function() {
                if (flashesTarget.childNodes.length) {
                    flashesTarget.removeChild(flashesTarget.firstChild);
                }
                let top = Math.floor(Math.random() * (90 - 10 + 1) + 5) + '%';
                let left = Math.floor(Math.random() * (90 - 20 + 1) + 5) + '%';
                let flash = document.createElement('div');
                flash.style.top = top;
                flash.style.left = left;
                flash.classList.add('flash');
                flash.classList.add(flashes[i]);
                console.log('flashes[i] = ');
                console.log(flashes[i]);
                
                flash.style.fontSize = Math.floor(Math.random() * (40 - 18 + 1) + 18) + 'px';
                if (!hasTrapWords) {
                    flash.innerHTML = flashes[i];
                } else {
                    if (Math.random() < 0.1) {
                        flash.innerHTML = flashes[Math.floor(Math.random() * flashes.length)];
                    } else {
                        flash.innerHTML = flashes[i];
                    }
                }
                flashesTarget.appendChild(flash);
            }, i * 2000);
        })(i); 
    }
    setTimeout(() => {
        flashesTarget.removeChild(flashesTarget.firstChild);
        isShowingFlashes = false;
    }, (flashes.length) * 2000);
}

function guessFlash(flash) {
    if (isShowingFlashes) {
        return;
    }
    console.log("guessing flash number " + guess + " ; color is: " + flash );
    if (flashes[guess] == flash) {
        guess++;
        console.log("correct");
        feedback.innerHTML = "Correct! The next color in the sequence was " + flash + '.';
        if (flashes.length == guess) {
            level++;
            guess=0;
            loadNextLevel(level);
            feedback.innerHTML = "Congratulations! You have progressed to level " + level + '.';
        }

    } else {
        guess=0;
        feedback.innerHTML = "Wrong! The next color in the sequence was not" + flash + '. Try again from the start.';
        console.log("wrong");
    }
}

function loadNextLevel(level) {
    populateColors(level);
    populateFlashes();
    populateColorButtons();
}