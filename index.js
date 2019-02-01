let submitButton = document.getElementById("submit-message");
let imageButton = document.getElementById("submit-image");
let messageArray =[];
let messages="";


function addToArray () {
	let message = document.getElementById("message-input").value;
	messageArray.push(message);
}

function addImageToArray () {
	let image = document.getElementById("message-input").value;
	messageArray.push("<img src=" + image + "></img>");
}

function printArray(){
	var messages = "";
	for (i = 0; i < messageArray.length; i++) {
	messages += messageArray[i] + "<br>";
	}
        document.getElementById("messages").innerHTML = messages;
}
function submitClicked(){
	addToArray();
	printArray();
	clearText();
		}


function imageClicked(){
	addImageToArray();
	printArray();
	clearText();
		}

function clearText(){
	document.getElementById("message-input").value ="";
}

submitButton.onclick = submitClicked;
imageButton.onclick = imageClicked;





