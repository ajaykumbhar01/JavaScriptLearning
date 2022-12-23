console.log('================1==================');
var sentense ="I am very good IT Developer"
var counter =0;
for (let index = 0; index < sentense.length; index++) {
    var char= sentense.charAt(index);
    var charCopy= char.toLowerCase();
    if (charCopy=='a'|| charCopy=='e'|| charCopy=='i'||charCopy=='o'||charCopy=='u')
    {counter=counter+1}
}
console.log(`total vowel ${counter}`);
console.log('================2==================');
function sumOfCubes(num){
    var sunmNum=0;
    for (let index = 0; index <= num; index++) {
        sunmNum= index**3;   
    }
    return sunmNum;
}
console.log(` The sum of cube of number from 1to 5 is:`,sumOfCubes(5));