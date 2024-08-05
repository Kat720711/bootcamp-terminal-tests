function regCheck(regNumber, locationCode) {
    return regNumber.endsWith(locationCode);
}

export default regCheck;