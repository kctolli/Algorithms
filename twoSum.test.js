const { expect } = require('@jest/globals');
const twoSum = require('./twoSum.js');

describe('twoSum', () => {

    test('test case 1', () => {
        twoSum([2,7,11,15], 9).toEqual([0,1])
    });

});