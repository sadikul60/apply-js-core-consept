// Find simple Interest amount

// 5 persent hare 2 years er 1000 takar simple Interest
function simpleInterest(amount, year){
    let interest = amount * year * 5 / 100;
    return interest;
}


const interested = simpleInterest(1000, 2);
console.log('Iterest of 2 year:', interested);