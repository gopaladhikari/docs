/**
 * * Infinity is the global value representing infinity. Same value as Number.POSITIVE_INFINITY
 *
 * *  Writeable: no
 * * Enumerable: no
 * * Configurable: no
 *
 * * The value Infinity (positive infinity) is greater than any other number.
 */

const maxNumber = Math.pow(10, 1000);

console.log(maxNumber); // Infinity

if (maxNumber === Infinity) {
  console.log(`${maxNumber} is Infinity`);
}

console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */

console.log(1 < Infinity);
console.log(1 >= -Infinity);
console.log(1 >= Number.POSITIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER);

const num = Number.MAX_SAFE_INTEGER + 15;

console.log(num);
