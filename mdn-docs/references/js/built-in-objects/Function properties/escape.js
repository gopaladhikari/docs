/**
 * ! This is deprecated, so it is bettter not to use it.
 * * escape function replaces characters with hexadecimal escape sequences.
 *
 * * It encodes all the characters except = (A–Z, a–z, 0–9, _) and  @\*_+-./
 */

console.log(escape("@*_+-./"));
console.log(escape("="));
console.log(escape("["));
console.log(escape("]"));
console.log(escape("{"));
console.log(escape("}"));
console.log(escape("^"));
