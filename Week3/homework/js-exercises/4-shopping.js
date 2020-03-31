'use strict';

let shoppingCart = ['bananas', 'milk'];
const addToShoppingCart = item => {
    if(shoppingCart.length < 3) {
        shoppingCart.push(item);
    } else {
        shoppingCart.shift();
        shoppingCart.push(item);
    }
    return `You bought ${shoppingCart}!`
}

addToShoppingCart('stroopwafel');
addToShoppingCart('gouda kaas');
console.log(addToShoppingCart('potato'));
