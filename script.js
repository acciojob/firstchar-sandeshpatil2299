function firstChar(text) {
  // your code here
	let newText= text.trim();

	if(newText.length <= 0) return "";
	if(newText.length <= 1 && newText[0] === " ") return "";

	return newText[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
