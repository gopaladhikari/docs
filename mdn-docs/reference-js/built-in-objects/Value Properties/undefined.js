/**
 * * undefined represents the primitive value, it is one of the javascript primitive data type.
 
 * * Writeable: no
 * * Enumerable: no
 * * Configurable: no
 */

function test(x) {
  if (x === undefined) return undefined;
  return x;
}

let x;

console.log(test(x));

/**
 * * It is the property in the global object.
 * * If the variable is defined but not assign any value is of type undefined.
 * * A method or a function also return undefined if any actual value is not returned.
 */

let xy;

if (xy === undefined) {
  // these statements execute because it pass the strict equality check.
} else {
  // these statements do not execute
}

/**
 * ! undefined is not reserved word in any scope other than global, so it can be used as variable there but using it is a bad idea.
 */

// ! DON'T DO THIS

(() => {
  const undefined = "foo";
  console.log(undefined, typeof undefined); // foo string
})();

((undefined) => {
  console.log(undefined, typeof undefined); // foo string
})("foo");

/**
 * * undefined is not the same as null.
 * * typeof undefined is undefined
 */

console.log(undefined === null); // false
console.log(undefined == null); // true
console.log(typeof undefined);

/**
 * * We can check the existence of global variable using in operator
 */

if ("x" in globalThis) {
  // these statements execute in browser
  console.log("x is defined globally.");
} else {
  // these statements do not execute
  console.log("x is not defined globally.");
}

if (x === void 0) console.log("Void Check passed");
else console.log("Void check failed");
