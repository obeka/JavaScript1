'use strict';
// All requirements for a valid card number need different validation. So each has their own
//functions. Maybe in the future it can be called individually.
const invalidCharacters = num => {
    if(typeof num !== 'number') {
        throw new Error(`Invalid character. Credit card number contains just NUMBERS.`)
    }
}

const calculateDigits = num => {
    let numArray = Array.from(String(num))
    if (numArray.length !== 16) {
        throw new Error(`Credit card number must be 16 digits! Your number is ${numArray.length} digits long.`)
    } else {
        return true
    }
}

const checkIfSame = num => {
    let numArray = Array.from(String(num))
    if (!numArray.every(number => number === numArray[0])) {
        return true
    } else {
        throw new Error("Credit card numbers can't be all same!")
    }
}

const lastNumEven = num => {
    if(num % 2 === 0 ) {
        return true
    } else {
        throw new Error("Last digit must be an even number!")
    }
}

const sumOfDigits = num => {
    let numArray = Array.from(String(num));
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i])
    }
    if(sum > 16) {
        return true
    } else {
        throw new Error(`The sum of all the digits must be greater than 16. Yours is ${sum}.`)
    }
}

const validator = num => {
    //try .. catch .. block is used to catch any error from above functions.
    try {
        invalidCharacters(num)
        calculateDigits(num);
        checkIfSame(num);
        lastNumEven(num);
        sumOfDigits(num);
        return `Your card number ${num} is VALID.`
    }catch (e) {
        return `${num} is INVALID. ${e.message}`
    }
}

console.log(validator(9999777788880000));
console.log(validator(6666666666661666));
console.log(validator('a92332119c011112'));
console.log(validator(4444444444444444));
console.log(validator(1111111111111110));
console.log(validator(6666666666666661));





