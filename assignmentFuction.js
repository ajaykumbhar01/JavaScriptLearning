console.log("===two functions===");

function cricketrName () {
console.log("My favorite cricketer name:MS Dhoni");
}
cricketrName();

function myHobbyName () {
    console.log("My favorite Hobby:Playing Cricket");
    }
    myHobbyName ();

console.log("===personalDetail=====");
function personalDetails(myName){
    console.log("ajay","kumbhar","Shivaji university");
}
personalDetails();
function swapValuesDude(value1,value2){
    console.log("before swap",value1,value2);
    var temp=value1;
    value1=value2
    value2=temp
    console.log("after swap",value1,value2);

}
console.log("====swapValueFunction=====");
swapValuesDude("virat","anushka")
console.log("====swapValueFunction=====");
swapValuesDude(1000,2000)

console.log("===adding Three Values");
function addThreeValues(value1,value2,value3){
console.log(value1+value2+value3);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning")