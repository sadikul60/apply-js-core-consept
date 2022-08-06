/*
Celsius to Kelvin, K = C + 273.15
Celsius to Fahrenheit, F = (9/5)C + 32
Fahrenheit to Celsius, C = (5/9)(F-32)
Fahrenheit to Kelvin, K = (5/9)(F+459.67)
Fahrenheit to Rankin, R = F + 459.67
Rankin to Kelvin, K = (5/9)R
 */


// Fahrenheit to Celsius converted
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) *5 / 9;
    return celsius;
}

const celsiuses = fahrenheitToCelsius(86);
console.log('Fahrenheit To Celsius:', celsiuses);