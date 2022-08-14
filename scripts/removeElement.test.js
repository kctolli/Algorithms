const { expect } = require('@jest/globals');
const removeElement = require('./removeElement.js');

describe('removeElement', () => {

    test('test case 1', () => {
        expect(removeElement([3,2,2,3], 3)).toEqual(2);
    });

    test('test case 2', () => {
        expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
    });
});