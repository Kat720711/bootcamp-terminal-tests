import assert from "assert";
import regCheck from '../regCheck.js';
import {describe, it} from 'node:test';

function regCheck(regNumber, locationCode) {
    return regNumber.endsWith(locationCode);
}

test('registration number ends with location code', () => {
    expect(regCheck('ABC 1234 CA', 'CA')).toBe(true);
});

test('registration number does not end with location code', () => {
    expect(regCheck('ABC 1234 CA', 'NY')).toBe(false);
});

test('location code is empty', () => {
    expect(regCheck('ABC 1234', '')).toBe(true); // An empty location code should match any registration number.
});

test('registration number is empty', () => {
    expect(regCheck('', 'CA')).toBe(false); // An empty registration number should not match any non-empty location code.
});

test('location code is longer than registration number', () => {
    expect(regCheck('ABC', 'LONGCODE')).toBe(false); // If the location code is longer, it should not match.
});

test('case sensitivity', () => {
    expect(regCheck('ABC 1234 ca', 'CA')).toBe(false); // Case-sensitive check.
});

test('exact match with trailing spaces', () => {
    expect(regCheck('ABC 1234 CA ', 'CA')).toBe(false); // Trailing spaces in registration number should affect the match.
});
