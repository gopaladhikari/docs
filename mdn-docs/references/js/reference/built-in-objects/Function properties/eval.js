/**
 * *  eval function evaluates the string and returns the result of the evaluation. The argument can be a string or a string expression.
 */

console.log(eval("2 + 2")); // 4

console.log(eval(new String("2 + 2"))); // returns a String object containing "2 + 2"

console.log(eval("2 + 2") === eval("4")); // true

console.log(eval("2 + 2") == eval(new String("2 + 2"))); // false

// * It is a function property of the global object.

console.log(globalThis.eval("2 + 2 + 2 + 2"));

let x = 5;

console.log(eval("x + x + x"));

// * Cannot redeclare eval in global scope but can be redeclared in function scope

// ! const eval = 5;

(() => {
  const eval = 5;
  console.log(eval);
})();

const expression = new String("2 + 2");

console.log(eval(String(expression)));

/**
 * * Direct and Indirect eval
 *
 * * -->  Direct eval refers to direct invoke of eval function as global property, everything else incluidng via aliased variable, via member access or other expression or through the optional chaining ?. operater is indirect
 */

// Direct call

eval("5 + 7");

// Indirect call

(0, eval)("5 + 7");

function test() {
  const x = 2;
  const y = 4;
  // Direct call, uses local scope
  console.log(eval("x + y")); // Result is 6
  // console.log(eval?.("x + y")); // Uses global scope, throws because x is undefined
}

test();
