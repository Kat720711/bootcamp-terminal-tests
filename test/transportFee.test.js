import assert from "assert";
import transportFee  from '../transportFee.js';
import {describe, it} from 'node:test';

test('returns R20 for morning shift', () => {
  expect(transportFee("morning")).toBe("R20");
});

test('returns R10 for afternoon shift', () => {
  expect(transportFee("afternoon")).toBe("R10");
});

test('returns free for nightshift', () => {
  expect(transportFee("nightshift")).toBe("free");
});

test('returns Invalid Shift for evening', () => {
  expect(transportFee("evening")).toBe("Invalid Shift");
});

test('returns Invalid Shift for empty string', () => {
  expect(transportFee("")).toBe("Invalid Shift");
});

test('returns Invalid Shift for number', () => {
  expect(transportFee(123)).toBe("Invalid Shift");
});

test('returns Invalid Shift for null', () => {
  expect(transportFee(null)).toBe("Invalid Shift");
});

test('returns Invalid Shift for undefined', () => {
  expect(transportFee(undefined)).toBe("Invalid Shift");
});

test('returns Invalid Shift for boolean', () => {
  expect(transportFee(true)).toBe("Invalid Shift");
});

test('returns Invalid Shift for case sensitivity', () => {
  expect(transportFee("MORNING")).toBe("Invalid Shift");
});
