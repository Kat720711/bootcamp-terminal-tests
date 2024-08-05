function totalPhoneBill(billItems) {
    var billItemsArray = billItems.split(','); 
    var totalCost = 0;

    for (var i = 0; i < billItemsArray.length; i++) {
        var item = billItemsArray[i].trim(); 
        if (item === 'call') {
            totalCost += 2.75; 
        } else if (item === 'sms') {
            totalCost += 0.65; 
        }
    }

    return 'R' + totalCost.toFixed(2);
}

export default totalPhoneBill;