console.log(`-------------------class for Vehical---------------`);
class Vehical {
  constructor(carname, engine, fuel, average, prise) {
    this.carname = carname;
    this.engine = engine;
    this.fuel = fuel;
    this.average = average;
    this.prise = prise;
  }
}
let hundaiI20 = new Vehical("i20", 1200, "petrol", 20, 100000);
let MarutiBaleno = new Vehical("Baleno", 1100, "petrol", 20, 110000);
let Mahindra300 = new Vehical("tuv", 1200, "petrol", 20, 130000);
let Toyoto = new Vehical("glanza", 1000, "petrol", 22, 190000);

console.log(hundaiI20);
console.log(MarutiBaleno);
console.log(Mahindra300);
console.log(Toyoto);
console.log(`-------------------class for college---------------`);

class College {
  constructor(name, department, subbranch, intake) {
    this.name = name;
    this.department = department;
    this.subbranch = subbranch;
    this.intake = intake;
  }
  colgDetail() {
    console.log(this.name,this.department,this.subbranch,this.intake);
  }
}
let dyp=new College("dyp engineering college","mechanical","automobile",100)
let RIT=new College("RIT engineering college","mechanical","automobile",150)
let KIT=new College("KIT engineering college","mechanical","automobile",300)
let IIT=new College("IIT engineering college","mechanical","automobile",200)
dyp.colgDetail();
RIT.colgDetail();
KIT.colgDetail();
IIT.colgDetail();