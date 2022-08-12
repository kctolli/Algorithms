const { expect } = require('@jest/globals');
const plusOne = require('./plusOne.js');

describe('plusOne', () => {

    test('test case 1', () => {
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });

    test('test case 2', () => {
        expect(plusOne([9])).toEqual([1,0]);
    });

    test('test case 3', () => {
        expect(plusOne([9,9,9,9])).toEqual([1,0,0,0,0]);
    });
});