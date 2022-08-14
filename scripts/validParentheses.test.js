const { expect } = require('@jest/globals');
const validParentheses = require('./validParentheses.js');

describe('validParentheses', () => {

    test('test case 1', () => {
        expect(validParentheses("()")).toEqual(true);
    });

    test('test case 2', () => {
        expect(validParentheses("()[]{}")).toEqual(true);
    });

    test('test case 3', () => { 
        expect(validParentheses("(]")).toEqual(false);
    });

    test('test case 4', () => { 
        expect(validParentheses("{}[")).toEqual(false);
    });

    test('test case 5', () => { 
        expect(validParentheses(")[")).toEqual(false);
    });

    test('test case 6', () => { 
        expect(validParentheses("hello")).toEqual(false);
    });
});