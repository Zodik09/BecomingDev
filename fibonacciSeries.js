// The Fibonacci Exercise
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// etc.

// Create a function where you can call it by writing the code:
// fibonacciGenerator (n)

// Where n is the number of items in the sequence.
// So I should be able to call:
// fibonacciGenerator(3) and get
// [0,1,1]
// as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.
// The first two numbers in the sequence must be 0 and 1.

// Solution
function fibonacciGenerator(n){
    var arr = []
    // var temp = 0;
    var a = 0;
    var b = 1;
    if(n === 1){
        arr.push(a);
    }
    else if(n === 2){
        arr.push(a,b);
    }
    else{
        arr.push(a,b);
    for (var i = 0; i < n-2; i++) {

        // 1st Way
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);

        // 2nd Way
        // temp = a;
        // a = b;
        // b = temp + b;
        // arr.push(b);
        }
    }
    return arr;
}
console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(5));
console.log(fibonacciGenerator(9));
console.log(fibonacciGenerator(10));