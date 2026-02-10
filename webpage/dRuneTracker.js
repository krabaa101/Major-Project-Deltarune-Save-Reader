const docIdGet = document.getElementById;

const input = document.getElementById("saveInput");
const fileInput = input.files;

const inButton = document.getElementById(Confirm);
inButton.addEventListener(click, readFile);

alert("Is this even working")

function readFile()
{
    docIdGet("saveConfirmer").innerHTML = "This is the element that i need to edit.";   
}

onload()
{
    alert("Is this even working")
}