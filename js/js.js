// these are the vars and it links to te html code
var codeContainer = document.getElementById("code-Container")
let clickCounter = 0,
    attempts = 1,
    inputButtons = document.querySelectorAll(".codeButton"),
    blinkToggle = false,
    blinks = 0;
guessWord = "";
passWord = "231";
console.log
//this are the code buttons
function getNumber(clickedButton) {
    clickCounter++;
    codeContainer.innerHTML += clickedButton.value;
    if (clickCounter == 1) {
        codeContainer.innerHTML = clickedButton.value
        guessWord = clickedButton.value;
    } else if (clickCounter == 2) {
        guessWord += clickedButton.value;
    } else if (clickCounter == 3) {
        guessWord += clickedButton.value;
        clickCounter = 0;
for (let i = 0; i < inputButtons.length; i++) {
            inputButtons[i].disabled = true;
        }
//this lets it blink green if right with a 200 delay
        if (guessWord == passWord) {
            codeContainer.innerHTML = "You guessed it with " + attempts + " attempts!";
            attempts = 1;
            blinkInterval = setInterval(function () {
                if (blinkToggle) {
                    document.getElementById("blink").style.backgroundColor = "green";
                } else {
                    document.getElementById("blink").style.backgroundColor = "black";
                    if (blinks >= 5) {
                        clearInterval(blinkInterval);
                        blinks = 0;
                        guessWord = "";

                        for (let i = 0; i < inputButtons.length; i++) {
                            inputButtons[i].disabled = false;
                        }
                    }
                }
                blinkToggle = !blinkToggle;
                blinks++;
            }, 200);
        // this lets it blink red if wrong with a 200 delay
        } else {
            codeContainer.innerHTML = "Wrong password!";
            attempts++;
            blinkInterval = setInterval(function () {
                if (blinkToggle) {
                    document.getElementById("blink").style.backgroundColor = "red";
                } else {
                    document.getElementById("blink").style.backgroundColor = "black";
                    if (blinks >= 5) {
                        clearInterval(blinkInterval);
                        blinks = 0;
                        guessWord = "";

                        for (let i = 0; i < inputButtons.length; i++) {
                            inputButtons[i].disabled = false;
                        }
                    }
                }
                blinkToggle = !blinkToggle;
                blinks++;
            }, 200);

        }
    }
}