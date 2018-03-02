var numberContainer = document.getElementById("number-container"),
    numberButtons = document.getElementsByClassName('buttonNumber'),
    greenBlock = document.getElementById("greenBlock"),
    redBlock = document.getElementById("redBlock"),
    message = document.getElementById('message'),
    intervalTimer = 0,
    clickCounter = 0,
    numberOne,
    numberTwo,
    numberThree;
var correctaudio = new Audio('snd/Win Sound Effect.mp3');
var incorrectaudio = new Audio('snd/lose.mp3')


function disableButtons() {


    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].setAttribute('disabled', 'disabled');
    }

}

function enableButtons() {

    //used to loop through all buttons and enable them again, remove attribute disabled
    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].removeAttribute('disabled');
    }

}

function getNumber(button) {
    // console.log(button.value);

    clickCounter++;

    numberContainer.innerHTML += button.value;

    if (clickCounter == 1) {
        numberOne = button.value;
    } else if (clickCounter == 2) {
        numberTwo = button.value;
    } else {
        numberThree = button.value;

        disableButtons()

        if (numberOne == 3 && numberTwo == 1 && numberThree == 1) {
            clickCounter = 0;
            message.innerHTML = "Your code is correct";
            correctaudio.play();
            var greenblink = setInterval(function() {

                //add +1 every time the setinterval function runs
                intervalTimer++;

                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                if (greenBlock.style.visibility == 'hidden') {
                    greenBlock.style.visibility = 'visible';
                } else {
                    greenBlock.style.visibility = 'hidden';
                }

                //check if the interval has runned ten times
                if (intervalTimer == 10) {
                    numberContainer.innerHTML = "";
                    message.innerHTML = "";
                    enableButtons()
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(greenblink);
                    intervalTimer = 0;
                    clickCounter = 0;

                }

            }, 500);


        } else {
            clickCounter = 0;
            message.innerHTML = "Your code is incorrect";
            incorrectaudio.play();
            var redblink = setInterval(function() {

                //add +1 every time the setinterval function runs
                intervalTimer++;

                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                if (redBlock.style.visibility == 'hidden') {
                    redBlock.style.visibility = 'visible';
                } else {
                    redBlock.style.visibility = 'hidden';
                }

                //check if the interval has runned ten times
                if (intervalTimer == 10) {
                    numberContainer.innerHTML = "";
                    message.innerHTML = "";
                    enableButtons()
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(redblink);
                    intervalTimer = 0;
                    clickCounter = 0;
                }

            }, 500);

        }
    }
    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
}
