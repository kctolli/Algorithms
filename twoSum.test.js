const { expect } = require('@jest/globals');
const twoSum = require('./twoSum.js');

describe('twoSum', () => {

    it('test function', () => {
        twoSum([2,7,11,15], 9).toEqual([0,1])
    });

});