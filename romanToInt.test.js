const { expect } = require('@jest/globals');
const romanToInt = require('./romanToInt.js');

describe('romanToInt', () => {

    test('test case 1', () => {
        expect(romanToInt("III")).toEqual(3);
    });

    test('test case 2', () => {
        expect(romanToInt("LVIII")).toEqual(58);
    });

    test('test case 3', () => {
        expect(romanToInt("MCMXCIV")).toEqual(1994);
    });
});