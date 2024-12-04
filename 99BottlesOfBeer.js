function beerBottles() {
    var i = 99;
    while (i > 0) {
        if (i > 2) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\n Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        } else if (i === 2) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\n Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
        }
        else {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.\n Take one down and pass it around, no more bottles of beer on the wall.");
        }
        i--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.")
}
beerBottles();