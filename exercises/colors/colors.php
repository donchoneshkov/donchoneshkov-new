<?php


//generate 10 levels
//starts with 3 color words with the right colors, at level 4 or 5 the text and the color doesn't always match
//the player has to click a bunch of buttons with color names in the right order







?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colors</title>
    <link rel="stylesheet" href="colors.css">
</head>
<body>
    <section id="instructions" class="instructions">
        <div>The game is simple: when you click <b>Start</b>, some words with different colors will flash on the screen. Your task is to repeat the <b>colors</b> in the order that they appeared.</div>
    </section>
    <section id="playingField" class="playingField">
        <div id="colorsBackground" class="colorsBackground"></div>
    </section>
    <section id="buttonsSection" class="buttonsSection">
        <div>
            <button id="startButton" class="startButton" onclick="flash(hasTrapWords);">Start</button>
        </div>
        <div id="colorButtonsDiv" class="colorButtonsDiv">

        </div>
    </section>
    <section id="feedback" class="feedback">feedback</section>
    <script src="main.js"></script>
</body>
</html>