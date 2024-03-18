/**
 * * NaN is the global value representing "not a number". Same value as Number.NaN
 *
 * *  Writeable: no
 * * Enumerable: no
 * * Configurable: no
 */

console.log(NaN); // NaN
console.log(typeof NaN); // number

function sanitise(x) {
  if (isNaN(x)) return NaN;

  return x;
}

console.log(sanitise("gopal")); // NaN
console.log(sanitise("1")); // 1 string
console.log(sanitise(1)); // 1 number

console.log(isNaN(5) < 1); // true

console.log(Number.NaN == NaN); // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true
console.log(Number.isNaN(NaN)); // true

/**
 * * Checks if the given value is NaN.
 *
 * * param {any} v - The value to be checked
 * * @return {boolean} Returns true if the value is NaN, false otherwise
 */

function valueIsNaN(v) {
  return v !== v;
}
console.log(valueIsNaN(1)); // false
console.log(valueIsNaN(NaN)); // true
console.log(valueIsNaN(Number.NaN)); // true

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(NaN !== NaN); // true

console.log(isNaN(1), Number.isNaN(1n)); // false false

/**
 * * isNaN will return true if the value is NaN or it's value is going to be NaN after coerce, but Number.isNaN doesn't coerce so it will also return true if the value is currently NaN.
 */

console.log(isNaN("hello world")); // true
console.log(Number.isNaN("hello world")); // false

console.log(NaN === "Hello");

/**
 * * Some array methods like indexOf, lastIndexOf cannot find NaN in array
 */

const arr = [2, 4, NaN, 12];

console.log(arr.indexOf(NaN)); // -1
console.log(arr.includes(NaN)); // true
console.log(arr.lastIndexOf(NaN));

const index = arr.findIndex((n) => isNaN(n));

console.log(index);
