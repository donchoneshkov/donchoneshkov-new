<?php

// get word from wordlist.txt

$file = fopen("wordlist.txt", "r");

// Check if the file was successfully opened
if ($file) {
    // Get the number of lines in the file
    $line_count = 0;
    while (!feof($file)) {
        fgets($file);
        $line_count++;
    }
    // Choose a random line number
    $random_line = rand(1, $line_count);

    // Go back to the beginning of the file
    rewind($file);

    // Read the file line by line until we reach the random line
    for ($i = 1; $i <= $random_line; $i++) {
        $line = fgets($file);
        if ($i == $random_line) {
            break;
        }
    }
    // Close the file
    fclose($file);
} else {
    // Handle the error if the file could not be opened
    echo "Error: Unable to open wordlist.txt";
}

// Use the random line and put it into $word
$word = trim($line);

// Generate an array from the $word
$wordArray = str_split($word);





?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman</title>
    <link rel="stylesheet" href="hangmanOutput.css">
</head>
<body>
    <section id="usedLetters" class="flex">
        <span id="a" class="letterButton">A</span>
        <span id="b" class="letterButton">B</span>
        <span id="c" class="letterButton">C</span>
        <span id="d" class="letterButton">D</span>
        <span id="e" class="letterButton">E</span>
        <span id="f" class="letterButton">F</span>
        <span id="g" class="letterButton">G</span>
        <span id="h" class="letterButton">H</span>
        <span id="i" class="letterButton">I</span>
        <span id="j" class="letterButton">J</span>
        <span id="k" class="letterButton">K</span>
        <span id="l" class="letterButton">L</span>
        <span id="m" class="letterButton">M</span>
        <span id="n" class="letterButton">N</span>
        <span id="o" class="letterButton">O</span>
        <span id="p" class="letterButton">P</span>
        <span id="q" class="letterButton">Q</span>
        <span id="r" class="letterButton">R</span>
        <span id="s" class="letterButton">S</span>
        <span id="t" class="letterButton">T</span>
        <span id="u" class="letterButton">U</span>
        <span id="v" class="letterButton">V</span>
        <span id="w" class="letterButton">W</span>
        <span id="x" class="letterButton">X</span>
        <span id="y" class="letterButton">Y</span>
        <span id="z" class="letterButton">Z</span>
    </section>
    <section id="word" class="flex"></section>
    <section id="hangman" class="hangman flex">
        <svg width="200" height="300">
         <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />
        </svg>
    </section>
    <section id="buttonsSection" class="flex">
        <button onclick="newGame()">New game</button>
        <button onclick="showWord()">Show word</button>
    </section>
    <section id="hiddenWordSection" class="flex"></section>
    <script>
        var mistakes = 0;
        // Get the word from PHP and turn it into an array of all the letters
        var word = <?php echo "'".$word."'";?>;
        var wordArray = word.split("");
        var wordLength = word.length;
        var shownLetters = 0;
        var wordSection = document.getElementById("word");
        // Generate spans with a class equal to the letter of the word and content of '_', and append them to the document
        wordArray.forEach((e, i) => {
            let child = document.createElement("span");
            child.id = i;
            child.classList.add("hiddenLetter");
            child.classList.add(e);
            child.innerHTML = "_";
            wordSection.appendChild(child);
        });
        // Bind event listeners to all the letter buttons (which are actually just spans)
        var letters = document.getElementsByClassName("letterButton");
        Array.from(letters).forEach((el) => {
            el.addEventListener("click", guessLetter);
        });
        // I have to externally bind the function, otherwise I cannot unbind it.
        function guessLetter(event) {
            let clicked = document.getElementById(event.target.id);
            clicked.classList.add('clickedLetter');
            let hiddenLetters = document.getElementsByClassName('hiddenLetter');
            let hit = 0;
            // Check if the word contains any of the clicked letter, incrase number of hits, show letters
            Array.from(hiddenLetters).forEach( (el => {
                if (el.classList.contains(clicked.id)) {
                    el.classList.remove('hiddenLetter');
                    el.classList.add('shownLetter');
                    el.innerHTML = el.classList[0];
                    hit = 1;
                    shownLetters++;
                    // Win if the word is entirely revealed
                    if (shownLetters == wordLength) {
                        window.alert("Congratulations you win!");
                    }
                    document.getElementById(el.classList[0]).classList.add('containedLetter');
                } 
            }));
            // If the letter isn't contained in the word increase mistakes and draw the hanged man
            if (hit == 0) {
                mistakes++;
                hang(mistakes);
            }
            // Lose if you get 7 mistakes
            if (mistakes >= 7) {
                window.alert("You have been hanged! The word was " + word + "!");
            }
            // Remove event listener for clicked letters
            clicked.removeEventListener("click", guessLetter);
        }
        // Store our svg for the hanged man here
        var hangman = document.getElementById('hangman');
        function hang(stage){
            if (stage == 0) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                    </svg>';
            }
            if (stage == 1) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                    <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                    <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                    </svg>';
            }
            if (stage == 2) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                    </svg>';
            }
            if (stage == 3) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                        <line x1="75" y1="160" x2="100" y2="160" stroke="black" />\
                                    </svg>';
            }
            if (stage == 4) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                        <line x1="75" y1="160" x2="100" y2="160" stroke="black" />\
                                        <line x1="100" y1="160" x2="125" y2="160" stroke="black" />\
                                    </svg>';
            }
            if (stage == 5) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                        <line x1="75" y1="160" x2="125" y2="160" stroke="black" />\
                                        <line x1="100" y1="200" x2="75" y2="250" stroke="black" />\
                                    </svg>';
            }
            if (stage == 6) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                        <line x1="75" y1="160" x2="125" y2="160" stroke="black" />\
                                        <line x1="100" y1="200" x2="75" y2="250" stroke="black" />\
                                        <line x1="100" y1="200" x2="125" y2="250" stroke="black" />\
                                    </svg>';
            }
            if (stage == 7) {
                hangman.innerHTML = '<svg width="200" height="300">\
                                        <rect x="20" y="20" width="160" height="260" fill="white" stroke="black" />\
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="black" />\
                                        <line x1="100" y1="140" x2="100" y2="200" stroke="black" />\
                                        <line x1="75" y1="160" x2="125" y2="160" stroke="black" />\
                                        <line x1="100" y1="200" x2="75" y2="250" stroke="black" />\
                                        <line x1="100" y1="200" x2="125" y2="250" stroke="black" />\
                                        <line x1="100" y1="20" x2="100" y2="60" stroke="black" />\
                                    </svg>';
            }
        }
        // New game. Since it's a simple program, it's easier to just reload the page.
        function newGame() {
            location.reload();
        }
        // Show the word. Just for debugging and such.
        function showWord() {
            let target = document.getElementById('hiddenWordSection');
            let node = document.createElement('div');
            node.innerHTML = word;
            target.appendChild(node);
        }
    </script>
</body>
</html>