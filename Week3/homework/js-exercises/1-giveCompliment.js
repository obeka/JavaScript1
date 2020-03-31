'use strict';
let controlNum =[]; // This array will keep track of random numbers in order not to repeat same numbers.
const giveCompliment = name => {

    const compliments = ['great', 'awasome', 'well', 'healthy', 'good',
        'fit', 'strong', 'hard-working', 'nice', 'legendary'
    ];

    let randomNumber;
    do { 
        randomNumber = Math.floor(Math.random() * 10);
    } while (controlNum.includes(randomNumber));  //To produce unique random numbers
    controlNum.push(randomNumber); //When a random number is produced, it goes to the archieve so we will track of it.
    
    console.log(`You are ${compliments[randomNumber]}, ${name}!`);

}

giveCompliment('Ömer');
giveCompliment('Ömer');
giveCompliment('Ömer');