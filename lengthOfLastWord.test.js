const { expect } = require('@jest/globals');
const lengthOfLastWord = require('./lengthOfLastWord.js');

describe('lengthOfLastWord', () => {

    test('test case 1', () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5);
    });

    test('test case 2', () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    });

    test('test case 3', () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
    });

    test('test case 4', () => {
        expect(lengthOfLastWord("Algorithm")).toEqual(9);
    });
});