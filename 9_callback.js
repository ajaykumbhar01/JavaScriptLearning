// Given the home work 
//Anil ->homework
function anilHomework(callback){
    console.log("Anil is doing homework...");
    console.log("after some time anil did homework");
    callback();
}
//Sunil -> Homework
function sunilHomework(){
console.log("i am happy anil ,you have completed homework");
console.log("i am bit lazy and dont have time as well");
console.log("so coping as it is your homework");
}
anilHomework(sunilHomework)
//sunilHomework()



// function show (){
//     console.log("this is show function");
// }
// setTimeout(show,2000)

setTimeout(function show(){
    console.log("this is show function");
},3000)