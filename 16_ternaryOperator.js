
console.log("==========For Male========================================");
function maleMarriageEligibility (gender,age,boyName){
    var result= gender=="male" && age>=21 ? "eligible for Marriage":"soryy, no eligible for Marriage";
return result
}

console.log(`Rocky ${maleMarriageEligibility (`male`,25,`Rocky`)}`);
console.log(`RockyBhai ${maleMarriageEligibility (`male`,16,`RockyBhai`)}`);
console.log(`RockyHandsome ${maleMarriageEligibility (`male`,28,`RockyHandsome`)}`);
console.log("==========For FeMale========================================");

function FemaleMarriageEligibility (gender,age,GirlName){
    var result= gender=="Female" && age>=18 ? "eligible for Marriage":"soryy, no eligible for Marriage";
return result
}

console.log(` Janifer ${FemaleMarriageEligibility (`Female`,27,`janifer`)}`);
console.log(`Malinda gates ${FemaleMarriageEligibility (`Female`,16,`Malinda gates`)}`);
console.log(`Dipika ${FemaleMarriageEligibility (`Female`,19,`Dipika`)}`);