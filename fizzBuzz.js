// “Fizz” if i is divisible by 3,
// “Buzz” if i is divisible by 5
// “FizzBuzz” if i is divisible by 3 and 5,

var output = [];
var start = 1
function fizzBuzz() {
    if(start % 3 === 0 && start % 5 === 0){
    output.push("FizzBuzz");
    }
    else if(start % 5 === 0){
    output.push("Buzz");
    }
    else if(start % 3 === 0){
    output.push("Fizz");
    }
    else{
    output.push(start);
    }
    start++;
    console.log(output);
}
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()