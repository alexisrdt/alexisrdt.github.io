"use strict";

const main = document.getElementsByTagName("main")[0];

const header = document.createElement("header");
fetch("./header.html")
	.then(response => response.text())
	.then(text => header.innerHTML = text)
	.then(() => main.insertBefore(header, main.firstChild));
