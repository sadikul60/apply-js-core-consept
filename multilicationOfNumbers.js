// 1 * 2 * 3 * 4 * 5 * 6 * 7
/* function factorial(number){
    let result =  1;
    for ( let i = 1; i <= number; i++ ){
        result = result * i;
    }
    return result;
}

const result = factorial(8);
console.log(result); */



// 4! = 4*3*2*!
/* function factorial(number){
    let result =  1;
    for ( let i = number; i >= 1; i-- ){
        result = result * i;
        console.log(i, 'Factorial of :', result);
    }
    return result;
}

const result = factorial(4); */



// 4! = 4*3*2*!
function factorial(number){
    let result =  1;
    for ( let i = number; i >= 1; i-- ){
        result = result * i;
    }
    return result;
}

const result = factorial(4);
console.log('Factorial of 4:', result);