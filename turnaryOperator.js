//if SSC marks greater than eqal to 35% then allow for inter then pass or fail
var ssscMmarks =39;
var resultPassOrfail=ssscMmarks>=35 ? "pass" : "fail";
console.log(`${resultPassOrfail}`);
//condition check ? "sentence1":"sentense2"
//function expresion ssc result 
var sscResult =function(ssscMmarks){
    var resultPassOrfail=ssscMmarks>=35 ? "pass" : "fail";
    return  resultPassOrfail;
}
var result=sscResult(39)
console.log(`result is 39 ${sscResult(39)}`); //sc takne

//for gender male check marriege eligiblity with value age =23