//console.log(`1) Personal details `);
const personal = {
    name : "Ajay",
    mobileNo : 7972686801,
    place : "kolhapur",
    education : "BE"
}
// console.log(personal);
// console.log(``);

//console.log(`2) College Details `);
const college = {
    clgName : "DYP engg ",
    location : "kolhapur",
    university : "kolhapur",
    departement : 6
}
//console.log(college);
console.log(``);

console.log(`Merge two object personal details and college`);
const mergeObject = Object.assign({}, personal, college);
console.log(mergeObject);
console.log(``);

//console.log(`Creating array of friends name `);
let array = ["vicky", "rocky","john","tiger"]
//console.log(array);


console.log(`==Array of friends after freezing and iterating by using for of loop===`);
for (const iterator of array) {
    console.log(iterator);
}
console.log(``);

console.log(`=======================Revering word ==========="`);
let string = "Codemind Technology";
function reverse(array){
    return array.split('').reverse().join('');
}
console.log("Codemind", reverse('Technology'));