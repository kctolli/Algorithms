const { expect } = require('@jest/globals');
const palindrome = require('./palindrome.js');

describe('palindrome', () => {

    test('test case 1', () => {
        expect(palindrome(121)).toEqual(true);
    });

    test('test case 2', () => {
        expect(palindrome(10)).toEqual(false);
    });

    test('test case 3', () => {
        expect(palindrome(-121)).toEqual(false);
    });

    test('test case 4', () => {
        expect(palindrome(0)).toEqual(true);
    });
});