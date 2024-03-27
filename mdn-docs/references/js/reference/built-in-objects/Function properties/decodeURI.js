/**
 * * decodeURI function decodes the URI encoded by encodeURI() function.
 */

const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}

console.log(
  decodeURI(
    "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
  )
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
