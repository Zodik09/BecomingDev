var numberOfDrumsButton = document.querySelectorAll(".set .drum").length;

// Function to play the sound when a button is clicked using mouse.
for (let i = 0; i < numberOfDrumsButton; i++) {
    document.querySelectorAll(".set .drum")[i].addEventListener("click", function () {
        playSound(this.textContent);
        buttonAnimation(this.textContent);
    }
    )
}

// Function to play the sound when a keyboard's key is pressed.
document.addEventListener("keydown", function (e) {
    playSound(e.key.toLowerCase());
    buttonAnimation(e.key.toLowerCase());
})

// Function to play the sound based on the key pressed.
function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.warn(key + " is not a valid key.");
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.toggle("pressed");
    setTimeout(function () {
        activeButton.classList.toggle("pressed");
    }, 100);
}