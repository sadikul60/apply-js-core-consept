
// from mile to convert kilomiter
function milesToKilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const dhakaMiles = 5;
const dhakaKilometer = milesToKilometer(dhakaMiles);
console.log('Dhaka kilo length:', dhakaKilometer);
