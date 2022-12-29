
const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
    valuation: "130B $"

  }
  console.log(`-----------------for inloop-----------------`);
  for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
       console.log(element); 
    }
  }console.log(`========== in operator ================`);
  let isAvailable = "height" in person;
  
  if (isAvailable) {
     delete person.height;
     console.log(`"height" property is deleted successfully`);
  } else{
     console.log(`"height" property not deleted as it is available inside object`);
  }
 