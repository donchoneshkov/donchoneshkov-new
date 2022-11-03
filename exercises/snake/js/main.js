var score = 0;
var gameTiles = document.getElementsByClassName('game-tile');
var food = 'game-tile--food';
var snake = 'game-tile--snake';
var mine = 'game-tile--mine';
var time = 1;
var spawnRate = Math.random()*30;
var position = [10,10];
var direction = [0,1];
var snakeLength = 3;
var currentSnake =  [
                        [10,8],
                        [10,9],
                        [10,10]
                    ];
var collisionTile;
var gameFrame;
var scoreCounter = document.getElementById('scoreCounter');
var mineCount = 10;

document.addEventListener('keydown', event => {

        if ((event.key == 'ArrowLeft') && (direction[1] != 1)) {
            direction = [0,-1];
        }

        if ((event.key == 'ArrowUp') && (direction[0] != 1)){
            direction = [-1,0];
        }

        if ((event.key == 'ArrowRight') && (direction[1] != -1)){
            direction = [0,1];
        }

        if ((event.key == 'ArrowDown') && (direction[0] != -1)){
            direction = [1,0];
        }
        
});

function startGame(){
    clearBoard();
    dropMines(mineCount);
    gameFrame = window.setInterval(function() {
        updateTiles();
    }, 180);

}

function startLoadedGame(){
    window.alert('Game loaded');
    gameFrame = window.setInterval(function() {
        updateTiles();
    }, 180);

}

function stopGame(reason){

        clearInterval(gameFrame);
        if ( reason == 'Loading game') {
            window.alert(reason);
        } else if ( this == 'You have stopped the game') {
            window.alert(this);
        } else {
            window.alert(reason + score);
        }
        clearBoard();
}

function clearBoard() {
    
    Array.from(gameTiles).forEach ( tile => {
        if (tile.classList.contains(food)) {
            tile.classList.remove(food);
        }
        if (tile.classList.contains(snake)) {
            tile.classList.remove(snake);
        }
        if (tile.classList.contains(mine)) {
            tile.classList.remove(mine);
        }
        
    });
    score = 0;
    scoreCounter.innerText = ' ' + score + ' ';
    time = 1;
    position = [10,10];
    direction = [0,1];
    snakeLength = 3;
    currentSnake =  [
                        [10,8],
                        [10,9],
                        [10,10]
                    ];

}

function loseGame(reason){

    stopGame(reason);
    score = 0;
    Array.from(gameTiles).forEach( tile =>  {
        tile.classList.remove(food);
        tile.classList.remove(snake);    
        tile.classList.remove(mine);    
    });
    time = 1;
    position = [10,10];
    direction = [0,1];
    snakeLength = 3;
    currentSnake =  [
                        [10,8],
                        [10,9],
                        [10,10]
                    ];

}

function updateScore(){

    score++;
    scoreCounter.innerText = ' ' + score + ' ';

}

function checkCollision(){

    collisionTile = getTile(currentSnake[currentSnake.length-1]);

    if(collisionTile.classList.contains(food)) {
        eatFood(collisionTile);
    }

    if(collisionTile.classList.contains(snake)) {
        loseGame("You bit yourself! Your score is: ");
    }

    if(collisionTile.classList.contains(mine)) {
        loseGame("You hit a mine! Your score is: ");
    }

}

function eatFood(tile) {
    updateScore();
    tile.classList.remove(food);
    snakeLength++;
}

function spawnFood() {
    if (time >= spawnRate) {
        
        spawnRate = Math.random()*30;
        time = 1;
        let x = Math.floor(Math.random()*20);
        let y = Math.floor(Math.random()*20);
        var tile = [];
        tile[0] = x;
        tile[1] = y;
        tile = getTile(tile);

        if (!tile.classList.contains(snake) && !tile.classList.contains(mine)){
           tile.classList.add(food);
        } else {true;}

    } else {
        time++;
    }

}

function moveSnake() {

    if (direction[0] != 0) {

        if (position[0] == 0 && direction[0] == -1) {position[0] = 19}
        else if (position[0] == 19 && direction[0] == 1) {position[0] = 0}
        else {position[0] += direction[0]}
        
    } else if (direction[1] != 0) {

        if (position[1] == 0 && direction[1] == -1) {position[1] = 19}
        else if (position[1] == 19 && direction[1] == 1) {position[1] = 0}
        else {position[1] += direction[1]}

    }

    if (currentSnake.length >= snakeLength) {

        let trim = getTile(currentSnake[0]);
        trim.classList.remove(snake);
        currentSnake = currentSnake.slice(1);

    }

    currentSnake.push(Array.from(position));
    checkCollision();

    currentSnake.forEach(tile => {

        tile = getTile(tile);
        tile.classList.add(snake);
    });

}


function updateTiles() {

    moveSnake(); 
    spawnFood();

}

function getTile(tile) {

    let id = 'tile' + tile[0] + '-' + tile[1];
    tile = document.getElementById(id);
    return tile;

}

function dropMines(count) {

    for (var i = 0; i < count; i++) {  

        let x = Math.floor(Math.random()*20);
        let y = Math.floor(Math.random()*20);
        if (x <= 12 && x >= 7) {
            if (y <= 12 && y >= 7) {
            i--;
            continue;
            }
        }
        var tile = [];
        tile[0] = x;
        tile[1] = y;
        tile = getTile(tile);

        if (!tile.classList.contains(snake)){
        tile.classList.add(mine);
        } else {console.log('tried to spawn mine but was on snake')}

    }

}