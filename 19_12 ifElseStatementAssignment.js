var studentEligiblity = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`your age is ${age} this is invslid data`);
  } else {
    if (age >= 18) {
      console.log(`your age is ${age} you eligible for vote`);
    } else {
      console.log(`your age is ${age} you are not eligible for vote`);
    }
  }
};
studentEligiblity(45);
studentEligiblity(17);
studentEligiblity(8);
studentEligiblity(20);
studentEligiblity(-10);
studentEligiblity(200);
studentEligiblity(0);

console.log(`===========second point===========`);
function graduationMarks(marks) {
  if (marks <= 0 && marks > 100) {
    console.log(`Provide Valid number`);
  }
  if (marks >= 90 && marks <= 100) {
    console.log(`Fantastic mark ${marks} your grade is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent mark ${marks} your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good mark ${marks} your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(` ${marks} improvement needed`);
  }
  if (marks < 35) {
    console.log(`result fail ${marks} `);
  }
  
}
graduationMarks(90)
graduationMarks(35)
graduationMarks(80)
graduationMarks(150)
graduationMarks(64)
graduationMarks(49)
graduationMarks(91)
graduationMarks(-7)
graduationMarks(0)
