
// factorial value
// 4! = 4*3*2*1
/* function factorial(number){
    let result = 1;
    for( let i = 4; i >= 1; i--){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

factorial(4)
 */



// factorial value
// 10! = 10*9*8*7*6*5*4*3*2*1
function factorial(number){
    var result = 1;
    for ( let i = 10; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

var factorialValue =factorial(10);
console.log('Factorial of 10:', factorialValue);