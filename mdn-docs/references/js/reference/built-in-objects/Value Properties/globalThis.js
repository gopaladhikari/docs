/**
 * * The globalThis provides the way to access global objects, regardless of the environment it is running in. So it can run in multiple environment such as browser and Node.js without modification.
 *
 * * Writeable: yes
 * * Enumerable: no
 * * Configurable: yes
 *
 * * In many environment it refers to actual global object but in browser, due to iframe and cross-window security consideration it refers to proxy around the global object ( which can't be access directly )
 */

function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest == "function";
}

console.log(canMakeHTTPRequest()); // False in nodejs and true in browser

function canFetch() {
  return typeof globalThis.fetch == "function";
}

console.log(canFetch());

console.log(globalThis == window); // true in browser
console.log(globalThis === window); // true in browser
console.log(globalThis == this); // true in browser
console.log(globalThis === this); // true in browser

console.log(window.Math === Math); // true in  browser

if (typeof globalObject.Intl === "undefined") {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}

Object.defineProperty(globalThis, "globalThis", {
  value: {
    // Our globalThis implementation
    Hello: "World",
  },
  enumerable: false,
  configurable: true,
  writable: true,
});
