function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCOde = branchCode;
}
let sbi = new Bank("SBI Bank", "kolhapur", 098765, 123);
let UBI = new Bank("UBI Bank", "Karad", 12334, 133);
let MHA = new Bank("MHA Bank", "Panhala", 098765, 143);
let AXIS = new Bank("AXIS Bank", "satara", 098765, 323);
console.log(sbi);
console.log(UBI);
console.log(MHA);
console.log(AXIS);
console.log(`---OPEN TIME AND CLOSE TIME----`);
let openTime = (Bank.prototype.openTime = "9AM IST");
let closeTime = (Bank.prototype.closeTime = "5 PM IST");
console.log(`Bank open at`, openTime);
console.log(`Bank close at`, closeTime);
console.log(`---OPEN TIME AND CLOSE TIME of Sbi----`);
console.log(`open time   ${openTime}` + `close time   ${closeTime}`);

console.log(`-=======bankName and closeTime of axisBank object========-`);
console.log(`Bank name ${AXIS.bankName}` + `close time ${AXIS.closeTime}`);

console.log(`---bankName ,branchcode and open Time of UBI object----`);
console.log(
  `Bank name ${UBI.bankName}  ` +
    `Branch code ${UBI.branchCode}  ` +
    `Open time ${UBI.openTime}  `
);
Write a email to project manager in order to get access for project repository, JIRA, Confluence documentation
let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); // 
console.log("Anil: ", anil); //
