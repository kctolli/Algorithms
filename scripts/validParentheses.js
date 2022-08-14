/** https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var validParentheses = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    } else if (s[0] == '[' || s[0] == '(' || s[0] == '{') {
        return validStack(s);
    } else { 
        return false; 
    }
};

var validStack = (s) => {
    const stack = []

    for (i = 0; i < s.length; i++){
        switch(s[i]) {
            case '(': 
                stack.push(')');
                break;
            case '[': 
                stack.push(']');
                break;
            case '{': 
                stack.push('}');
                break;
            default:
                let topElement = stack.pop();
                if (s[i] !== topElement) return false;       
        }
    }
    
    return stack.length === 0;
}

module.exports = validParentheses;