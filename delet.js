//function argument and return
var myName=function(num1,num2){
var result= num1*num2
return result
}
var result=myName(12,13)
console.log(result);

var firstName ="ajay"
var lastName="kumbhar"
var result= firstName+lastName
console.log(result);
var greet="Good Mornng"
var indexof=greet.indexOf("M")
console.log(indexof);
var indexofNin=greet.indexOf("nin")
console.log(indexofNin);
//replace===================================================================
var greet="Good Mornng"
var greetreplace =greet.replace("Mornng","afternoon")
console.log(greetreplace);
console.log(greet.replace("Mor","Eve"));
//too upper cas=============================================================
console.log(greet.toUpperCase());
//include =word ahe ka nai 
console.log("include",greet.includes("Good"));
//trim========================================
var greet="   ajay kumbhar   "
var resulttrim=greet.trim()
console.log(resulttrim,resulttrim.length);
//slice===============picess========
var greet="ajay kumbhar"
var result =greet.slice(0,4)
console.log(result);
//====split====divide====
var studentList="dips,ajay,vijay,sujay"
var studentlistspt=studentList.split(",")
console.log(studentlistspt);

//=========total no of word======
var sentence ="i am react developer"
var wordinsentence= sentence.split(" ")
console.log(wordinsentence.length);
//=============ES6==string templet with variable substitution====='',"",`backtik
console.log(`i am "ajay"`);
//========================================
var firstName ="ajay"
var lastName="kumbhar"
console.log(`first name is ${firstName} last name is ${lastName}`);
console.log("Hellow","\ngood","\nmorning");
//assign===
var hobby1="dancc"
var hobby2="cricekrt"
var hobby3="cooling"
console.log(`my hobbies are ${hobby1} ${hobby2}${hobby3}`);
===========================
var words =function (){
    var length=
}