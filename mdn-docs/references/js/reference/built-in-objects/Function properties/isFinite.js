/**
 * * isFinite function tests if the value of a number is finite. It returns true if the number is finite and false if it is not.
 *
 * * A finite number is not NaN or less than infinity.
 *
 * * First the argument coerce to the number before evaluating.
 */

console.log(isFinite(0)); // true

console.log(isFinite(NaN)); // false

/**
 * * isFinite is the global property and Number property
 */

console.log(globalThis.isFinite(6)); // true

console.log(Number.isFinite(60)); // true

/**
 * * When a argument of the isFinite function is not a number then is coerce to the numebr and compares the resulting to NaN and infinity.
 *
 * * Number.isFinite is more reliable because it return false for any non number input
 */

console.log(isFinite("10")); // true
console.log(isFinite("Gopal")); // false
console.log(isFinite("NaN")); // false

console.log(globalThis.isFinite("NaN")); // false
console.log(globalThis.isFinite("10")); // true
console.log(globalThis.isFinite("true")); // false

console.log(Number.isFinite("10")); // false
console.log(Number.isFinite("NaN")); // false
console.log(Number.isFinite("true")); // false

function check(x) {
  return isFinite(x);
}

console.log(check(45)); // true
