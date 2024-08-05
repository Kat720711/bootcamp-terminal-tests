export default function countAllFromTown(registrationNumbers, townPrefix) {
    const regNumbersArray = registrationNumbers.split(',');

   let count = 0;

   for (const regNumber of regNumbersArray) {
       const trimmedRegNumber = regNumber.trim();
       if (trimmedRegNumber.startsWith(townPrefix)) {
           count++;
       }
   }

   return count;
}