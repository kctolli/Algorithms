/** https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = ((i % 3) === 0);
        let divisibleBy5 = ((i % 5) === 0);

        if (divisibleBy3 && divisibleBy5){
            array.push(`FizzBuzz`);
        } else if (divisibleBy3) {
            array.push(`Fizz`);
        } else if (divisibleBy5) {
            array.push(`Buzz`);
        } else {
            array.push(`${i}`);
        }
    }
    return array;
};

module.exports = fizzBuzz;
