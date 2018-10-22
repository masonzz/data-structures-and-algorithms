// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let length = s.length;
    if (length % 2 !== 0) {
        return false;
    }
    let map = {
        '(': ')',
        '[': ']',
        '{': '}' 
    };
    let stack = [];
    for (let i = 0; i < length; i++) {
        let stackLength = stack.length;
        if (stackLength === 0 && (s[i] === ')' || s[i] === ']' || s[i] === '}'))
            return false;
        if (stackLength === 0) {
            stack.push(s[i])
        } else {
            if (s[i] === map[stack[stackLength - 1]]) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        }
    }
    return stack.length === 0;
};

let s = "{[()]}";
console.log(isValid(s));