class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
    }
}
//console.log(`=================A) Created A Class BAnk And Added Data Members==================`);
let axisBank=new Bank("Axis Bank","Kolhapur",111111,"axis00001","6%","");
let sbiBank=new Bank("State Bank Of India","sangli",222222,"sbi00003","4%");
let icicBank=new Bank("ICIC Bank","Mumbai",333333,"icic44564","9%");
let kotakBank=new Bank("Kotak Bank","pune",444444,"kotak66456","4%");
let hdfcBank=new Bank("HDFC Bank","satara",555555,"hdfc984","5%",);
let punjabBank=new Bank("Punjab Bank ","karad",666666,"panajab74477","6%");
//console.log(`========================B) Created Objects==========================`);
// console.log(axisBank);
// console.log(sbiBank);
// console.log(icicBank);
// console.log(kotakBank);
// console.log(hdfcBank);
// console.log(punjabBank);
//console.log(`C) Create The Map In Such A Way That Key Should Be Bank Account Number And Value Is Object`);
const details= new Map()
details.set(111111,axisBank)
details.set(222222,sbiBank)
details.set(333333,icicBank)
details.set(444444,kotakBank)
details.set(555555,hdfcBank)
details.set(666666,punjabBank)
//console.log(`Accounts Number A Keys`);
const keyOfMapDetails = details.keys();
console.log(keyOfMapDetails);
console.log(`----------------Traverse The Map -------------`);

for (const iterator of keyOfMapDetails) {
  const employee = details.get(iterator);
  console.log(`Bank Name-:${employee.bankName} Account No-:${employee.accountNo} Interest Rate-:${employee.interestRate}`);
  
}