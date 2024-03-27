/**
 * * encodeURIComponent function is a global object which encodes the uri components by replacing certain characters with escape sequences.
 *
 * * It escapes all the character except = A–Z a–z 0–9 - _ . ! ~ * ' ( )
 */

console.log(`?x=${encodeURIComponent("test?")}`);
// Expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// Expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

console.log(encodeURIComponent("%%%%"));
console.log(encodeURIComponent("^^^^"));
console.log(encodeURIComponent("!@#$%^&*()_+"));
console.log(encodeURIComponent("123456789-_.!~*'()"));

const name = "Ben & Jerry's";

// This is bad:
const link = encodeURI(`https://example.com/?choice=${name}`); // "https://example.com/?choice=Ben%20&%20Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', 'Ben '], [" Jerry's", '']

// Instead:
const link2 = encodeURI(
  `https://example.com/?choice=${encodeURIComponent(name)}`
);

// "https://example.com/?choice=Ben%2520%2526%2520Jerry's"
console.log([...new URL(link2).searchParams]); // [['choice', "Ben%20%26%20Jerry's"]]

const set1 = ";/?:@&=+$,#"; // Reserved Characters
const set2 = "-.!~*'()"; // Unreserved Marks
const set3 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;/?:@&=+$,#
console.log(encodeURI(set2)); // -.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (the space gets encoded as %20)
