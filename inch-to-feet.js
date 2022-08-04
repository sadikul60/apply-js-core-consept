

/* const dadaInches = 84;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet:', dadaFeet);

const nanaInches = 72;
const nanaFeet = nanaInches / 12;
console.log('Nana Feet:', nanaFeet); */

function inchToFeet(inches){
    const feets = inches / 12;
    return feets;
}

// Dada Feet
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada Feet:', dadaFeet);

// Nana feet
const nanaInches = 72;
const nanaFeet = inchToFeet(nanaInches);
console.log('Nana Feet:', nanaFeet);
