var graduationScore=function(gradScore,hscScore,sscScore,candname){
var result = graduationScore == gradScore>=70||hscScore>=80||sscScore>=90 ? "eligible for TCS interview ":"sorry not eligible"
return result
}

console.log(`Ajay ${graduationScore(80,86,90,`ajay`)}`);
console.log(`vijay ${graduationScore(70,65,55)}`);
console.log(`john ${graduationScore(60,79,88)}`);