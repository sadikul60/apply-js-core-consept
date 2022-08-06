// Fahrenheit to Celsius converted
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) *5 / 9;
    return celsius;
}

const celsiuses = fahrenheitToCelsius(86);
console.log('Fahrenheit To Celsius:', celsiuses);