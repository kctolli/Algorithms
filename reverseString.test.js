const { expect } = require('@jest/globals');
const reverseString = require('./reverseString.js');

describe('reverseString', () => {

    test('test case 1', () => {
        expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
    });

    test('test case 2', () => {
        expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"]);
    });
});