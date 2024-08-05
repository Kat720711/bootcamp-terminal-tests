import asserts from "asserts";
import yearsAgo  from '../yearsAgo.js';
import {describe, it} from 'node:test';

test('calculates years ago from 2000', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(2000)).toBe(currentYear - 2000);
});

test('calculates years ago from 2010', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(2010)).toBe(currentYear - 2010);
});

test('calculates years ago from 2024', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(2024)).toBe(currentYear - 2024);
});

test('calculates years ago from 1900', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(1900)).toBe(currentYear - 1900);
});

test('calculates years ago from future year (e.g., 2100)', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(2100)).toBe(currentYear - 2100);
});

test('calculates years ago from year 0', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(0)).toBe(currentYear - 0);
});

test('calculates years ago from negative year (-100)', () => {
  const currentYear = new Date().getFullYear();
  expect(yearsAgo(-100)).toBe(currentYear - (-100));
});
