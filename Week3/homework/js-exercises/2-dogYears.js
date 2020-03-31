'use strict';

const calculateDogAge = age => {
    let dogYear = age * 7;
    return `Your doggie is ${dogYear} years old in dog years!`;
}

console.log(calculateDogAge(2.5));
console.log(calculateDogAge(3));
console.log(calculateDogAge(9));