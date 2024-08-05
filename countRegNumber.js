export default function countRegNumber(regString){
    const regNumbers = regString.split(',');
    return regNumbers.length;
 }
 var regCount = countRegNumber('CA 182736, CY 523519, CJ 812328');
 console.log(regCount);
 var regCount2 = countRegNumber('CA 42665, AA 42665, AA 12 RT GP');
 console.log(regCount);

