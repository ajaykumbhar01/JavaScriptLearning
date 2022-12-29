console.log(`-----incriment by one---------------`);
for (let index = 5; index <= 15; index++) {
   const element = index;
   console.log(index);  
}
console.log(`-----dincriment by one---------------`);

for (let index = 50; index >= 40; index--) {
   const element = index;
   console.log(element);  
}

console.log(`-----first 10 even numbers---------------`);
var i=0;
var counter=0
while (i<50) {
   if (i%2==0) {
      console.log(i);
     counter++
      }
      if (counter==10) {
         break;
         
      }i++;
}