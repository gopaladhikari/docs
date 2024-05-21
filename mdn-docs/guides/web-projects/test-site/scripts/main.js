const myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

// myHeading.textContent = "Hello world!";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
// 	alert("Yay, I love chocolate ice cream!");
// } else {
// 	alert("Awwww, but chocolate is my favorite…");
// }

// Functions

function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

// Events

// document.querySelector("html").addEventListener("click", function () {
// 	alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/firefox-icon.png")
		myImage.setAttribute("src", "images/website-drawing-scan.png");
	else myImage.setAttribute("src", "images/firefox-icon.png");
};

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) setUserName();
	else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}

if (!localStorage.getItem("name")) setUserName();
else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};
