const { expect } = require('@jest/globals');
const containsDuplicates = require('./containsDuplicates.js');

describe('containsDuplicates', () => {

    test('test case 1', () => {
        expect(containsDuplicates([1,2,3,1])).toEqual(true);
    });

    test('test case 2', () => {
        expect(containsDuplicates([1,2,3,4])).toEqual(false);
    });

    test('test case 3', () => { 
        expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
    });

    test('test case 4', () => {
        expect(containsDuplicates([0])).toEqual(false);
    });

    test('test case 5', () => {
        expect(containsDuplicates([])).toEqual(false);
    });
});