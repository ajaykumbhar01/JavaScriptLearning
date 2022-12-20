function monthOfyear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`This is january`);
      break;
    case 2:
      console.log(`2 :February`);
      break;
    case 3:
      console.log(`3 : March`);
      break;
    case 4:
      console.log(`This is April`);
      break;
      case 5:
      console.log(`5 :May`);
      break;
      case 6:
      console.log(`6 : june`);
      break;
      case 12:
      console.log(`12 : December`);
      break;
      
      case 100:
      console.log(`100: invalid Month`);
      break;
      case 15:
      console.log(`15: invalid Month`);
      break;
     default:
        break;
     
  }
}
monthOfyear(2);
monthOfyear(5);
monthOfyear(12);
monthOfyear(15);
monthOfyear(100);
