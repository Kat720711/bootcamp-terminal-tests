function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    return currentYear - year;
}

export default yearsAgo;