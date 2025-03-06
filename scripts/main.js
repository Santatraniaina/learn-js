let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
const myImage = document.querySelector("img");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// EVENTS
myButton.addEventListener("click", () => {
	setUserName();
});

myImage.addEventListener("click", () => {
	const mySrc = myImage.getAttribute("src");
	const storedName = localStorage.getItem("name");

	if (mySrc === "images/firefox-icon.png") {
		myImage.setAttribute("src", "images/google-icon.png");
		myHeading.textContent = `But Google is better, ${storedName}!`;
	} else {
		myImage.setAttribute("src", "images/firefox-icon.png");
		myHeading.textContent = `Mozilla is cool, ${storedName}!`;
	}
});
