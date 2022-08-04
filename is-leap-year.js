function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log('Is your leap year:', year);
    }
    else{
        console.log('Is your not leap your:', year);
    }
}

isLeapYear(1996);
isLeapYear(2021);
isLeapYear(2023);
isLeapYear(2024);


/* function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
       return true;
    }
    else{
        return false;
    }
}


const myLeapYear = isLeapYear(2021);
console.log(myLeapYear)
const herLeapYear = isLeapYear(2024);
console.log(herLeapYear,); */