let fruitsSeasonal=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruitsSeasonal);
console.log(" First element",fruitsSeasonal[0]);
console.log(" Last element",fruitsSeasonal[4]);

console.log("===========add papaya before banana element at last===============");
console.log(fruitsSeasonal);
fruitsSeasonal.splice(0, 0, "papaya");
console.log(fruitsSeasonal);
console.log("===========remove mango from array===============");
console.log(fruitsSeasonal);
delete fruitsSeasonal[4]
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
let lastIndex=fruitsSeasonal.length-1;
for (let index = lastIndex; index > 3; index--) {
    const element = fruitsSeasonal[index];
    console.log(element);
}