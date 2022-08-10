const { expect } = require('@jest/globals');
const singleNumber = require('./singleNumber.js');

describe('singleNumber', () => {

    test('test case 1', () => {
        expect(singleNumber([2,2,1])).toEqual(1);
    });

    test('test case 2', () => {
        expect(singleNumber([4,1,2,1,2])).toEqual(4);
    });

    test('test case 3', () => {
        expect(singleNumber([1])).toEqual(1);
    });
});