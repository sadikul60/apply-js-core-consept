/* function isEven(number){
    const remainder = number % 2;
    console.log(remainder);
}

isEven(445) */


// even number 
function isEven(number){
    remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(223);
console.log('Even number is:', myNumber)
const otherNumber = isEven(224);
console.log('Even number is:', otherNumber)