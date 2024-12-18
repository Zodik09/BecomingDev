// Life in Weeks Coding Exercise
// I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.

// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

// It will take your current age as the input and console.logs a message with our time left in this format:

// You have x days, y weeks, and z months left.
// Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// Example Input
// e.g. If you are 56 years old:
// lifeInWeeks(56)

// Example Output
// You have 12410 days, 1768 weeks, and 408 months left.

// Solution
function lifeInWeeks(age) {
    /************Don't change the code above************/    
        //Write your code here.
        var remainingAgeInYears = 90 - age;
        var remainingAgeInDays = remainingAgeInYears * 365;
        var remainingAgeInWeeks = remainingAgeInYears * 52;
        var remainingAgeInMonths = remainingAgeInYears * 12;
        console.log("You have " + remainingAgeInDays + " days, " + remainingAgeInWeeks + " weeks, and " + remainingAgeInMonths + " months left.")
    /*************Don't change the code below**********/
    }
    
lifeInWeeks(24);