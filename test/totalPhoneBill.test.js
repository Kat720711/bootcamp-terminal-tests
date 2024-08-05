import assert from "assert";
import totalPhoneBill from '../totalPhoneBill.js';
import {describe, it} from 'node:test';

// totalPhoneBill.test.js
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
  
  test('calculates total bill for only calls', () => {
    expect(totalPhoneBill('call, call, call')).toBe('R8.25');
  });
  
  test('calculates total bill for only SMSs', () => {
    expect(totalPhoneBill('sms, sms')).toBe('R1.30');
  });
  
  test('calculates total bill for combination of calls and SMSs', () => {
    expect(totalPhoneBill('call, sms, call')).toBe('R5.15');
  });
  
  test('calculates total bill for empty string', () => {
    expect(totalPhoneBill('')).toBe('R0.00');
  });
  
  test('calculates total bill with invalid items', () => {
    expect(totalPhoneBill('call, email, sms')).toBe('R3.40');
  });
  
  test('calculates total bill with multiple items and extra spaces', () => {
    expect(totalPhoneBill('call ,  sms , call ')).toBe('R5.15');
  });
  
  test('calculates total bill with a large number of items', () => {
    expect(totalPhoneBill('call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call')).toBe('R25.20');
  });
  