// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"





// new method for me Set(), a collection of values, values can only occur once which is what we need
// new Set() will create a new Set object from the concatenated string
// Array.from() will convert the Set back into an array
// use .sort() to sort the array alphabetically
// .join() will put it back together into a single string
function longest(s1, s2){
    return Array.from(new Set(s1 + s2)).sort().join('');
}