// Find simple Interest amount

function simpleInterest(amount, year){
    let interest = amount * year * 6 / 100;
    return interest;
}


const interested = simpleInterest(1000, 2);
console.log('Iterest of 2 year:', interested);