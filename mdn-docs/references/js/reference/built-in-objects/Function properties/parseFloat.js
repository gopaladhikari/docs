/**
 * * parseFloat parse the string argument and returns a floating point number,
 *
 * * Whitespace in the argument string is ignored.
 */

const { log } = console;

function areaOfRectangle(length, breadth) {
  const area = 2 * (parseFloat(length) + parseFloat(breadth));
  return area;
}

const area = areaOfRectangle("10.5", "10.7");
log("area: ", area);

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

log(circumference("10.5"));
log(circumference("10.5454545"));

/**
 * * If the argument doesn't fullfill the syntax rules then it returns NaN.
 */

console.log(parseFloat(NaN));
console.log(parseFloat(3.14));
console.log(parseFloat("3.14"));
console.log(parseFloat("  3.14  "));
console.log(parseFloat("314e-2")); // ignores the invalid characters
console.log(parseFloat("0.0314E+2")); // ignores the invalid characters
console.log(parseFloat("3.14some non-digit characters")); // ignores the invalid characters
console.log(parseFloat("FF2")); // NaN
