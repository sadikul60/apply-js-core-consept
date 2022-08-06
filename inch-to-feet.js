

/* const dadaInches = 84;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet:', dadaFeet);

const nanaInches = 72;
const nanaFeet = nanaInches / 12;
console.log('Nana Feet:', nanaFeet); */

/* function inchToFeet(inches){
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
 */


// convert from kilogram to KG
function kiloGramToKg(weight){
    const kg = weight / 1000;
    return kg;
}

const kg = kiloGramToKg(10000);
console.log('KG:',kg);


// convert from KG to Kilogram
function kgToKiloGram(kg){
    let kiloGram = kg * 1000;
    return kiloGram;
}

const kiloGram = kgToKiloGram(10);
console.log('Kilogram:', kiloGram);


//convert  from dozon to Quantity
function dozonToQuantity(quantity){
    let quantitys = quantity * 12;
    return quantitys;
}

const quantitys = dozonToQuantity(5);
console.log('from 5 Dozon to quantitys:', quantitys);
