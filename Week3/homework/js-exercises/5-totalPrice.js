'use strict';

const cartForParty = {
    nachos : 2.99,
    popcorn : 4.24,
    coke : 8.99,
    pretzels : 7.8,
    chips : 9.56
}

const calculateTotalPrice = list => {
    let sum = 0;
    for(let i = 0; i < Object.keys(list).length; i++) {
        sum += Object.values(list)[i]
    }
    return sum;
}

console.log(calculateTotalPrice(cartForParty))