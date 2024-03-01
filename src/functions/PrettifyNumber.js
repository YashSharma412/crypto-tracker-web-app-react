export default function PrettifyNumber(num) {
  const numWithCommas = num.toLocaleString();
  var myArr = numWithCommas.split(",");
  if (myArr.length == 6) {
    //Quadrillion
    return myArr[0] + "." + myArr[1].slice(0, 2) + "Qa";
  } else if (myArr.length == 5) {
    //  Trillions
    return myArr[0] + "." + myArr[1].slice(0, 2) + "T";
  } else if (myArr.length == 4) {
    //  Billions
    return myArr[0] + "." + myArr[1].slice(0, 2) + "B";
  } else if (myArr.length == 3) {
    //  Millions
    return myArr[0] + "." + myArr[1].slice(0, 2) + "M";
  } else if (myArr.length == 2) {
    //  Thousands
    return myArr[0] + "." + myArr[1].slice(0, 2) + "K";
  } else {
    return numWithCommas;
  }
}
