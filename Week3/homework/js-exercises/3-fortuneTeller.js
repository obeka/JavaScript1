'use strict';

const numChildren = [1, 2, 3, 4, 5]
const partnerNames = ['Monica Geller', 'Rachel Green', 'Phoebe Buffay', 'Robin Scherbatsky', 'Lily Aldrin'];
const location = ['Netherlands', 'Germany', 'the USA', 'the UK', 'Turkey']
const jobs = ['Head Chef', 'Paleontologist', 'Developer', 'Architect', 'Lawyer']

const tellFortune = (numChildren, partnerNames, location, jobs) => {
    let ranNum1 = Math.floor(Math.random()*5);
    let ranNum2 = Math.floor(Math.random()*5);
    let ranNum3 = Math.floor(Math.random()*5);
    let ranNum4 = Math.floor(Math.random()*5);
    return `You will be a ${jobs[ranNum1]} in ${location[ranNum2]}, and married to ${partnerNames[ranNum3]} with ${numChildren[ranNum4]} kids.`
}

console.log(tellFortune(numChildren, partnerNames, location, jobs));