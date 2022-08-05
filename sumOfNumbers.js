// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8;
/* let sum = 0;
for ( let i =1; i <= 8; i++){
    sum = sum + i;
    console.log(i, sum);
} */


// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + .............+ 100
function sumOfNumbers (number){
    let sum = 0;
    for ( let i =1; i <= 100; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

sumOfNumbers(10);