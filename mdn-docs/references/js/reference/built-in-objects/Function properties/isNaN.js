/**
 * * isNaN function is a global and Number property which returns true if the value is NaN and false if it is not. It coerce the argument into number if necessary.
 *
 * * If the argument of isNaN is not a number then it coerce into number and then compares it to NaN.
 *
 * * isNaN true means, it is not a number, which can be string, NaN etc.
 */

const isFinityANumber = isNaN(Infinity); // false
const isStringFinityANumber = isNaN("Infinity"); // false

console.log("isStringFinityANumber: ", isStringFinityANumber);
console.log("isFinityANumber: ", isFinityANumber);

function test(x) {
  if (isNaN(x)) return "It is not a number";
  return "It is a number";
}

const isStringNaN = test("Gopal"); // false
console.log("isStringNaN: ", isStringNaN);

const isNumberNaN = test("5"); // true due to coerce
console.log("isNumberNaN: ", isNumberNaN);

console.log(Number.isNaN("5")); // false, it is a number

/**
 * * isNaN coerce empty string into 0 and boolean to 0,1 but both are not number but it is a number after coerce
 */

console.log(isNaN("")); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false

console.log(isNaN(NaN)); // true
console.log(isNaN(5)); // false
console.log(isNaN("5")); // false
console.log(Number.isNaN("5")); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(5)); // false
console.log(Number.isNaN("123456789")); // false
console.log(Number.isNaN("123456789abc")); // false
console.log(Number.isNaN("12345ABC")); // false
console.log(isNaN("12345ABC")); // true

console.log(Number("12345ABC") === NaN); //
