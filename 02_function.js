function display(){
    console.log("My name:Ajay");
    console.log("My sir name is:kumbhar");
}
display();    //function call

function show(){
    console.log("My college name:Shivaji uni");
}
show();

function swapValues(value1,value2){
    console.log("before swap",value1,value2);
    var temp=value1;
    value1=value2
    value2=temp
    console.log("after swap",value1,value2);
    return 100;
}
swapValues(100,200);
