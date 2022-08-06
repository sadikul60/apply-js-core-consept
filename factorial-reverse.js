
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



//  10 of factorial value. uses for loop
// 10! = 10*9*8*7*6*5*4*3*2*1
/* function factorial(number){
    var result = 1;
    for ( let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

var factorialValue =factorial(10);
console.log('Factorial of 10:', factorialValue); */
// Output: 10 9 8 7 6 5 4 3 2 1 Factorial of 10: 3628800



//  4 of factorial value. uses whie loop
// 4! = 4*3*2*1
function factorial(number){
    var i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const factorialNumber = factorial(6);
console.log( 'Factorial of 4:', factorialNumber);
// Output: Factorial of 4: 24