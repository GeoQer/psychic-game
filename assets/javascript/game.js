window.onload = function () {
    //start with variables
    var selectedLetter;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(letters.length);
    var userGuess;
    var wins = 0;
    var losses = 0;
    var tries = 9;
    var guessed = [];
    var divTag = document.getElementById("game");
    var scoreCard = function (divTag, wins, losses, tries, guessed) {
        divTag.innerHTML =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Tries remaining: " + tries + "</p>" +
            "<p>Letter already guessed: " + guessed.join() + "</p>";
    };

    //select a letter
    selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(selectedLetter);

    //look for user input

    document.onkeyup = function (event) {
        userGuess = event.key;
        console.log(userGuess);
    };

    if (userGuess === selectedLetter) {
        wins++;
        tries = 9;
        selectedLetter = letters[Math.floor(Math.random() * letters.length)];
        scoreCard;
        console.log(selectedLetter);

    }
    else {
        guessed.push(userGuess)
        tries--;
        scoreCard;
        console.log(tries);
    };
    if (tries === 0) {
        losses++;
        tries = 9;
        selectedLetter = letters[Math.floor(Math.random() * letters.length)];
        scoreCard;
        console.log(losses);
    };

    scoreCard;
};