let fruitsSeasonal=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruitsSeasonal);
let totalLength = fruitsSeasonal.length;
let firstElement = fruitsSeasonal[0];
let lastElement = fruitsSeasonal[totalLength-1]
console.log(`First element in given array is : ${firstElement} \n Last element in given array is: ${lastElement} `);


console.log("===========add papaya before banana element at last===============");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(0, 0, "papaya");
console.log(fruitsSeasonal);

console.log("===========remove mango from array===============");
console.log(fruitsSeasonal);
const index = fruitsSeasonal.indexOf("Mango");
fruitsSeasonal.splice(index,1)
console.log(fruitsSeasonal);

console.log("===========add dragonfruit before watermelon element at last===============");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(5, 0, "Dragonfruit");
console.log(fruitsSeasonal);
console.log("===========replace orange with kiwi===============");
console.log(fruitsSeasonal);
fruitsSeasonal[2]="kiwi"
console.log(fruitsSeasonal);
console.log("===========index 2-5===============");
console.log(fruitsSeasonal);
let sliceRes = fruitsSeasonal.slice(1, 4);
console.log(sliceRes);
console.log("===========last three numbers===============");
console.log(fruitsSeasonal);
let res = fruitsSeasonal.slice(-3);
console.log(res);