const string = "This is my string";

const browserType = "mozilla";
console.dir(browserType.length);
console.dir(browserType[0]);
console.log(browserType[browserType.length - 1]);

if (browserType.includes("zilla")) console.log("Found zilla!");
else console.log("No zilla here!");

if (browserType.startsWith("zilla")) console.log("Found zilla!");
else console.log("No zilla here!");

if (browserType.endsWith("zilla")) console.log("Found zilla!");
else console.log("No zilla here!");

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

console.log(tagline.indexOf("x")); // -1

console.log(browserType.slice(1, 4)); // "ozi"

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
