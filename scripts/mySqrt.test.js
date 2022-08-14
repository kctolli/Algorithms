const { expect } = require('@jest/globals');
const mySqrt = require('./mySqrt.js');

describe('mySqrt', () => {

    test('test case 1', () => {
        expect(mySqrt(4)).toEqual(2);
    });

    test('test case 2', () => {
        expect(mySqrt(8)).toEqual(2);
    });

    test('test case 3', () => {
        expect(mySqrt(1)).toEqual(1);
    });

    test('test case 4', () => {
        expect(mySqrt(3)).toEqual(1);
    });
});