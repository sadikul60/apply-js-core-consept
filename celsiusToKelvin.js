/*
Celsius to Kelvin, K = C + 273.15
Celsius to Fahrenheit, F = (9/5)C + 32
Fahrenheit to Celsius, C = (5/9)(F-32)
Fahrenheit to Kelvin, K = (5/9)(F+459.67)
Fahrenheit to Rankin, R = F + 459.67
Rankin to Kelvin, K = (5/9)R
 */

// celsius to kelvin converted
function celsiusToKelvin (celsius){
    let kelvin = celsius + 273.15;
    return kelvin;
}

const kelvins = celsiusToKelvin(30);
console.log('Celsius to Kelvin:', kelvins);