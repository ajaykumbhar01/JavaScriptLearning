console.log("===========Greatest value amoung two numbers==================");
var num1=20;
var num2=40;
var result= num1>num2 ? num1 : num2
console.log("gretest number among 20&40:",result);

var num1=120;
var num2=240;
var result= num1>num2 ? num1 : num2
console.log("gretest number among 120&240",result);
console.log("===========odd or even number==================");
var evenOrOdd = function(value){
result = value %2==0 ?"Even":"Odd"
return result
}
var result=evenOrOdd(29)
console.log("given no 29 is",result);
var result=evenOrOdd(44)
console.log("given no 29 is",result);
var result=evenOrOdd(0)
console.log("given no 0 is",result);
var result=evenOrOdd(101)
console.log("given no 101 is",result);
console.log("===========odd or even word ==================");

var words = function(name){
    var length = name.length;
    var string = length%2==0 ? "Even" : "Odd" ;
    console.log(`Given word is ${name} ${string}`);
    
    }
    evenOddLenghth("Javascript")
    evenOddLenghth("Developer")
    evenOddLenghth("Google")