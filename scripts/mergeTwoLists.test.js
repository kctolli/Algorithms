const { expect } = require('@jest/globals');
const mergeTwoLists = require('./mergeTwoLists.js');

describe('mergeTwoLists', () => {

    test('test case 1', () => {
        expect(mergeTwoLists([1,2,4], [1,3,4])).toEqual([1,1,2,3,4,4]);
    });

    test('test case 2', () => {
        expect(mergeTwoLists([], [])).toEqual([]);
    });

    test('test case 3', () => {
        expect(mergeTwoLists([], [0])).toEqual([0]);
    });

    test('test case 3', () => {
        expect(mergeTwoLists([1], [])).toEqual([1]);
    });
});