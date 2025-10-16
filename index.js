/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns 
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2  
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (s) => {
    const frequency = {};

    // First loop: count frequency of each character
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (frequency[letter] === undefined) {
            frequency[letter] = 1;
        } else {
            frequency[letter]++
        }
    };

    // Second loop: find the first char with count 1
    for (let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {
            return i;
        }
    }

    return -1; // if no unique character found
};


// Example usage (commented out to avoid interference with tests)
console.log(firstUniqChar("leetcode")); // → 0
console.log(firstUniqChar("loveleetcode")); // → 2
console.log(firstUniqChar("aabb")); // → -1


// Export the function for testing
module.exports = { firstUniqChar };

