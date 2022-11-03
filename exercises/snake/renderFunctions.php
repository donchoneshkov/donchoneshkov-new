<?php

function renderMenu() {
    //echo 'renderMenu();';
    $startButton = '<button id="startButton">Start game</button>';
    $pauseButton = '<button id="pauseButton">Pause game</button>';
    $stopButton = '<button id="stopButton">Stop game</button>';
    $saveButton = '<button id="saveButton">Save game</button>';
    $loadButton = '<button id="loadButton">Load game</button>';
    echo $startButton;
    echo $pauseButton;
    echo $stopButton;
    echo $saveButton;
    echo $loadButton;
    
}

function renderInfo() {
    //echo 'renderInfo();';
    $instructions = '<div>Use the arrows to move. Collect food to grow larger. Don\'t bite yourself and don\'t step on the mines!</div>';
    $score = '<div>Your current score is: <span id="scoreCounter"> 0 </span></div>';
    echo $instructions;
    echo $score;
}

function renderGameState() {
    
    $content = '';
    $content .= '<div class="game-container">';
    $j = 20;
    $k = 0;
    for ($i=0; $i < 400; $i++) { 
       if ($i % $j == 0) {
           $k++;
       } 
       $content .= '<div class="game-tile" id="tile' . ($k-1) . '-' . $i % $j . '">';
       $content .= '</div>';
    }

    $content .= '</div>';
    echo $content;
}

function returnSavedState($gameState) {

}


?>