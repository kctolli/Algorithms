const { expect } = require('@jest/globals');
const longestCommonPrefix = require('./containsDuplicate.js');

describe('longestCommonPrefix', () => {

    test('test case 1', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
    });

    test('test case 2', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
    });

    test('test case 3', () => { 
        expect(longestCommonPrefix(["dog"])).toEqual("dog");
    });
});