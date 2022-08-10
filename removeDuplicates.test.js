const { expect } = require('@jest/globals');
const removeDuplicates = require('./removeDuplicates.js');

describe('removeDuplicates', () => {

    test('test case 1', () => {
        expect(removeDuplicates([1,1,2])).toEqual(2);
    });

    test('test case 2', () => {
        expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
    });

    test('test case 3', () => {
        expect(removeDuplicates([0])).toEqual(0);
    });

    test('test case 4', () => {
        expect(removeDuplicates([])).toEqual(0);
    });
});