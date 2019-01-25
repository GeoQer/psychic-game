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
    var scoreCard = function () {
        divTag.innerHTML =
            '<p>Wins: <span id="wins">' + wins + '</span></p>' +
            '<p>Losses: <span id="losses">' + losses + '</span></p>' +
            '<p>Tries remaining: <span id="tries">' + tries + '</span></p>' +
            '<p>Letter already guessed: <span id="guessed">' + guessed.join(", ") + '</span></p>';
    };

    var scoreUpdate = function () {
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#tries").innerHTML = tries;
        document.querySelector("#guessed").innerHTML = guessed.join(", ");
    };

    //select a letter
    selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(selectedLetter);

    scoreCard();

    //look for user input

    document.onkeyup = function (event) {
        userGuess = event.key;
        console.log(userGuess);

        if (userGuess === selectedLetter) {
            wins++;
            tries = 9;
            guessed = [];
            selectedLetter = letters[Math.floor(Math.random() * letters.length)];
            scoreCard();
            console.log(selectedLetter);

        }
        else {
            guessed.push(userGuess)
            tries--;
            scoreCard();
            console.log(tries);
        };
        if (tries === 0) {
            losses++;
            tries = 9;
            guessed = [];
            selectedLetter = letters[Math.floor(Math.random() * letters.length)];
            scoreCard();
            console.log(losses);
        };
    };

    scoreCard();
};