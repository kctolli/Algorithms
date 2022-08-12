const { expect } = require('@jest/globals');
const divideTwoInt = require('./divideTwoInt.js');

describe('divideTwoInt', () => {

    test('test case 1', () => {
        expect(divideTwoInt(10, 3)).toEqual(3);
    });

    test('test case 2', () => {
        expect(divideTwoInt(7, -3)).toEqual(-2);
    });
});