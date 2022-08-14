const { expect } = require('@jest/globals');
const fizzBuzz = require('./fizzBuzz.js');

describe('fizzBuzz', () => {

    test('test case 1', () => {
        expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    });

    test('test case 2', () => {
        expect(fizzBuzz(5)).toEqual(["1","2","Fizz","4","Buzz"]);
    });

    test('test case 3', () => {
        expect(fizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});