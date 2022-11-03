var startButton = document.getElementById('startButton');
var pauseButton = document.getElementById('pauseButton');
var saveButton = document.getElementById('saveButton');
var loadButton = document.getElementById('loadButton');
var gameState = [[]];
gameState.splice(0, gameState.length);
var mineState = [[]];
mineState.splice(0, mineState.length);
var savedScore;
var savedDirection = [];
var savedPosition = [];
var savedSnake = [];
var savedSnakeLength;
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
stopButton.addEventListener('click', stopGame.bind('You have stopped the game'));
saveButton.addEventListener('click', saveGame);
loadButton.addEventListener('click', loadGame);

function pauseGame() {
    
    window.alert('Game paused');
    
}

function saveGame(){
    gameState.splice(0, gameState.length);
    Array.from(gameTiles).forEach( tile => {
        
        if (tile.classList.contains(food)) {

            var tileId = tile.id;
            tileId = tileId.replace(/[a-z]/gi, '');
            gameState.push(tileId.split(/\-/g));

        }

        if (tile.classList.contains(mine)) {

            var tileId = tile.id;
            tileId = tileId.replace(/[a-z]/gi, '');
            mineState.push(tileId.split(/\-/g));

        }

    });
    savedDirection = direction.slice();
    savedPosition = position.slice();
    savedSnake = currentSnake.slice();
    savedScore = score;
    savedSnakeLength = snakeLength;
    //gameState = coords;
    console.log(gameState);
    console.log(currentSnake);
    window.alert('Game has been saved');
}

function loadGame() {
    
    stopGame('Loading game');
    direction = savedDirection.slice();
    position = savedPosition.slice();
    currentSnake = savedSnake.slice();
    snakeLength = savedSnakeLength;
    score = savedScore;
    scoreCounter.innerText = ' ' + score + ' ';
    gameState.forEach( tile => {
        tile = getTile(tile);
        tile.classList.add(food);
    });
    mineState.forEach( tile => {
        tile = getTile(tile);
        tile.classList.add(mine);
    });
    currentSnake.forEach ( tile => {
        tile = getTile(tile);
        tile.classList.add(snake);
    });
    startLoadedGame();

}