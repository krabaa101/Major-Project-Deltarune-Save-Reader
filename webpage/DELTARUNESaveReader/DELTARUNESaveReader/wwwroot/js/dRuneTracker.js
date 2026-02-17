const docIdGet = document.getElementById;

const input = document.getElementById('saveInput');

const inButton = document.getElementById("confirmButton");
inButton.addEventListener("click", readFile);
function readFile() {
    alert("Is this even working")
    docIdGet("saveConfirmer").innerText = "This is the element that i need to edit.";
}


alert('Is this even reading?');