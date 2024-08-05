export default function countAllPaarl(registrationNumbers) {
    var count = 0;
    registrationNumbers.split(',').forEach(function(number) {
        if (number.trim().startsWith('CJ')) count++;
    });
    return count;
}

var countPaarl = countAllPaarl('CL 124,CY 567,CJ 345, CJ 456,CL 341');