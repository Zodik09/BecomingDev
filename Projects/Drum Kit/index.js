var numberOfDrumsButton = document.querySelectorAll(".set .drum").length;
for (let i = 0; i < numberOfDrumsButton; i++) {
    document.querySelectorAll(".set .drum")[i].addEventListener("click", function () {
        var buttonPressed = this.textContent;
        switch (buttonPressed) {
            case "w" || "W":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a" || "A":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;

            case "s" || "S":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d" || "D":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j" || "J":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;

            case "k" || "K":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;

            case "l" || "L":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;

            default:
                console.log(buttonPressed + " is not a valid key.");
                break;
        }
    })
}
