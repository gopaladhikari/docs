/**
 * * parseInt function parses the string argument and returns an integer of the specified radix between 2 and 36.
 * * If the radix is omitted, it is assumed to be 10 not always.
 * * Return value is a number or NaN.
 * * It converts into 32-bits integer.
 *
 */

console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

console.log(Number.parseInt("123", 10));

console.log(
  parseInt("0xF", 16),
  parseInt("F", 16),
  parseInt("17", 8),
  parseInt("015", 10),
  parseInt("15,123", 10),
  parseInt("FXX123", 16),
  parseInt("1111", 2),
  parseInt("15 * 3", 10),
  parseInt("15e2", 10),
  parseInt("15px", 10),
  parseInt("12", 13)
);

console.log(
  parseInt("-F", 16),
  parseInt("-0F", 16),
  parseInt("-0XF", 16),
  parseInt("-17", 8),
  parseInt("-15", 10),
  parseInt("-1111", 2),
  parseInt("-15e1", 10),
  parseInt("-12", 13)
);

/**
 * * It doesn't handle big int number
 */

console.log(parseInt("900719925474099267n"));
console.log(BigInt(900719925474099267n));
// 900719925474099300

/**
 * * parseInt in non number
 */

console.log(parseInt("abc", 10));
console.log(parseInt(null, 10));
console.log(parseInt(undefined, 10));
console.log(parseInt(NaN, 10));
console.log(parseInt(Infinity, 10));

/**
 * * parseInt always returns NaN if the radix is not between 2 and 36
 * * parseInt always returns NaN if first character can not be converted to an integer
 */

console.log(parseInt("123", 140)); // NaN
console.log(parseInt("..", 10)); // NaN
console.log(parseInt("-1", 10)); // -1
