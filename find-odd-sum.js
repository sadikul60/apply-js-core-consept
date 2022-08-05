/* function getSumOfAnArray(numbers){
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
    }
}

const myNumbers = [12, 33, 34, 43, 36, 23, 45, 66, 57];
getSumOfAnArray(myNumbers);
 



// get sum of an array
function getSumOfAnArray(numbers){
    let sum =0;
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 33, 34, 43, 36, 23, 45, 66, 57];
getSumOfAnArray(myNumbers); */


// get odd numbers of an array
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 33, 34, 43, 36, 23, 45, 66, 57];
const oddNumbers = getOddNumbersOfAnArray(myNumbers,);
console.log(oddNumbers);