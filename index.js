let submitButton = document.getElementById("submit-message");
let messageArray =[];
let messages="";
let imageButton = document.getElementbyId("submit-image");



function addToArray () {
	let message = document.getElementById("message-input").value;
	messageArray.push(message);
}

function addImageToArray () {
	let image = document.getElementById("message-input").value;
	messageArray.push("<img src=" + image + "></img>";
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





