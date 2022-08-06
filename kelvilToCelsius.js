/*
Celsius to Kelvin, K = C + 273.15
Celsius to Fahrenheit, F = (9/5)C + 32
Fahrenheit to Celsius, C = (5/9)(F-32)
Fahrenheit to Kelvin, K = (5/9)(F+459.67)
Fahrenheit to Rankin, R = F + 459.67
Rankin to Kelvin, K = (5/9)R
 */

// Kelvin to Celsius converted
function kelvinToCelsius(kelvin){
    let celsous = kelvin -273.15;
    return celsous;
}

const celsiuses = kelvinToCelsius(303.15);
const celsiusfixed = celsiuses.toFixed(2);
console.log(celsiusfixed);

