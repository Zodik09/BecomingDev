// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Example Input
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

// Example Output
// Michael is going to buy lunch today!

// Solution
function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var rand = Math.floor(Math.random() * names.length);
        return names[rand] + " is going to buy lunch today!"
        
    /******Don't change the code below*******/    
    }
    console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));