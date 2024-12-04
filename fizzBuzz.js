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