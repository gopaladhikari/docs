/**
 * * encodeURI function encodes the URI ( Uniform Rresource Indentifier ) by replacing certain characters with escape sequences.
 *
 * * Compared to encodeURIComponent() it encodes less character.
 *
 * * It is the property of the global object.
 *
 * * It doesn't encode the characters -> -,.,!,~,*,',(,)  known as unreserved marks.
 */

const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri); //
console.log("encoded: ", encoded); //https://mozilla.org/ x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

try {
  console.log("decoded: ", decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}

console.log(encodeURI("!@#$%^&*()_+=-[]{}|\\:;\"'<>,./?"));
