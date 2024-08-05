export default function fromWhere(registrationNumber) {
    if (registrationNumber.startsWith('CY')) {
        return 'Bellville';
    } else if (registrationNumber.startsWith('CJ')) {
        return 'Paarl';
    } else if (registrationNumber.startsWith('CA')) {
        return 'Cape Town';
    } else {
        return 'Some other place!';
    }
}